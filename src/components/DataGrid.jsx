import { AgGridReact } from 'ag-grid-react';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { themeQuartz, colorSchemeDark } from 'ag-grid-community';
import { mockData } from '../data/mockData';
import { useState } from 'react';
import { Box } from '@chakra-ui/react';

// Register all Community features
ModuleRegistry.registerModules([AllCommunityModule]);

const myTheme = themeQuartz
    .withPart(colorSchemeDark)
    .withParams(
        {
            backgroundColor: 'black',
            foregroundColor: 'white',
            browserColorScheme: 'dark',
            rowHoverColor: 'rgba(255, 255, 255, 0.1)',
            borderColor: 'rgba(255, 255, 255, 0.1)',
            cellEditingBorderColor: 'rgba(255, 255, 255, 0.1)',
            oddRowBackgroundColor: 'rgba(255, 255, 255, 0.05)',
            accentColor: 'white',
        }
    );

const Grid = () => {
    const [colDefs, setColDefs] = useState([
        { headerName: "User ID", field: "userId", sortable: true, filter: true, resizable: true },
        { headerName: "Song", field: "song", sortable: true, filter: true, resizable: true  },
        { headerName: "Artist", field: "artist", sortable: true, filter: true, resizable: true  },
        { headerName: "Date", field: "date", sortable: true, filter: true, resizable: true  },
        { headerName: "Stream Count", field: "count", sortable: true, filter: true, resizable: true  }
    ]);

    const [rowData, setRowData] = useState(mockData.recentStreams.map((stream) => (
        {
            userId: stream.userId,
            song: stream.song,
            artist: stream.artist,
            date: stream.date,
            count: stream.count
        }
    )));

    return (
        <Box p={5} w="100%" h="500px">
                <AgGridReact
                    animateRows={true}
                    pagination={true}
                    paginationAutoPageSize={true}
                    theme={myTheme}
                    rowData={rowData}
                    columnDefs={colDefs}
                />
        </Box>
    );
}

export default Grid;
