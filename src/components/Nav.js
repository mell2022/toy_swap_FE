import * as React from "react";
import Link from "@mui/material/Link";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";

export default function LinkDemo() {
  return (
    <Box sx={{ typography: "h6" }}>
      <Button variant="text">text</Button>
      <Button variant="text">Login</Button>
      <Button variant="text">SwapToys</Button>
    </Box>
  );
}
// href="/">Login</Link>
// href="/swaptoys">SwapToys</Link>
