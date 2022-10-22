import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {startFetchItems} from "../../redux/actions.tsx";
import * as React from "react";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import {Box, Collapse, IconButton, Typography} from "@mui/material";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableContainer from "@mui/material/TableContainer";
import Paper from "@mui/material/Paper";
import TableBody from "@mui/material/TableBody";
import ItemInfoRow from "./ItemInfoRow.tsx";

const ItemsPage = (props) => {
    const allItems = useSelector((state) => {return state.items.allItems})
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(startFetchItems())
    }, [])

    const filterItems = (items, query) => {
        if (!query) {
            return items;
        }

        return allItems.filter((item) => {
            const itemName = item.name.toLowerCase();
            return itemName.includes(query.toLowerCase());
        });
    };

    const filteredItems = filterItems(allItems, props.itemNameQuery);

    function Row(props: {row}) {
        const { row } = props;
        const [open, setOpen] = React.useState(false);

        return (
            <React.Fragment>
                <TableRow sx={{ '& > *': { borderBottom: 'unset' } }} onClick={() => setOpen(!open)} className={'table-row'}>
                    <TableCell>
                        <IconButton
                            aria-label="expand row"
                            size="small"
                            onClick={() => setOpen(!open)}
                        >
                            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                        </IconButton>
                    </TableCell>
                    <TableCell component="th" scope="row" >
                        <span className={'pokemon-name'}>{row.name}</span>
                    </TableCell>
                </TableRow>
                <TableRow>
                    <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                        <Collapse in={open} timeout="auto" unmountOnExit>
                            <Box sx={{ margin: 1 }}>
                                <Typography variant="h6" gutterBottom component="div">
                                    <span className={'row-title'}>{row.name}</span>
                                </Typography>
                                <Table size="small" aria-label="purchases">
                                    <TableHead>
                                    </TableHead>
                                    {open ? <ItemInfoRow name={row.name}/> : null}
                                </Table>
                            </Box>
                        </Collapse>
                    </TableCell>
                </TableRow>
            </React.Fragment>
        );
    }

    return (allItems && allItems.length > 0 &&
        <div>
            <div>
                <hr />
                    <TableContainer component={Paper}>
                        <Table aria-label="collapsible table" className={'table-container'}>
                            <TableHead>
                            </TableHead>
                            <TableBody>
                                {filteredItems.map((row) => (
                                    <Row key={row.name} row={row} />
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
            </div>
        </div>
    )

}

export default ItemsPage;