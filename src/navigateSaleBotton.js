import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function SaleButtons() {
    const navigate = useNavigate();
    return (
        <Stack spacing={2} direction="row">
            {/* complete  the path */}
            <Button variant="contained" color="info" onClick={() => navigate("/PrizesPage")}>למכירה הסינית</Button>
        </Stack>
    );
}
