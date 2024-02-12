import { IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { useState } from "react";
import { Colors } from "../../styles/theme";
import { clamp } from "./clamp";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";


export default function IncDec() {

    const clampV = clamp(1, 10);
    const [value, setValue] = useState(1);

    return(
        <Box display='flex'>
            <IconButton
                sx={{
                    borderRadius: 1,
                    background: `${Colors.secondary}`
                }}

                onClick={() => setValue(clampV(value - 1))}>
                    <RemoveIcon />
                </IconButton>
                <Typography
                variant="h6"
                sx={{
                    border: `1px solid ${Colors.secondary}`,
                    borderRadius: 1,
                    p: 1,
                    mr: 1,
                    ml: 1
                }}
                >
                    {value}
                </Typography>
                <IconButton
                sx={{
                    borderRadius: 1,
                    background: `${Colors.secondary}`
                }}

                onClick={() => setValue(clampV(value + 1))}>
                    <AddIcon />
                </IconButton>
        </Box>
    )
}