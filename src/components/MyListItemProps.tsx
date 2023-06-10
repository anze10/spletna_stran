import { ListItem, ListItemText } from "@mui/material";

type MyListItemProps = {
    children: string | JSX.Element
};

function MyListItem({ children }: MyListItemProps) {
    return <ListItem >
        <ListItemText primary={children} />
    </ListItem>
}
export default MyListItem