import React from 'react';
import { Pagination, Stack } from '@mui/material';
import { styled } from '@mui/material/styles';

// Interface pour les props
interface PaginationComponentProps {
    totalPages: number;
    currentPage: number;
    goToPage: (page: number) => void;
    handlePrevious: () => void;
    handleNext: () => void;
}

// Style personnalisé pour la pagination
const StyledPagination = styled(Pagination)(({ theme }) => ({
    '& .MuiPaginationItem-root': {
        color: '#9FA8BC',
        '&.Mui-selected': {
            backgroundColor: '#E9F0FF',
            color: '#246BFD',
            '&:hover': {
                backgroundColor: '#E9F0FF',
            }
        }
    },
    '& .MuiPaginationItem-ellipsis': {
        color: '#9FA8BC',
    }
}));

const PaginationComponent: React.FC<PaginationComponentProps> = ({
                                                                     totalPages,
                                                                     currentPage,
                                                                     goToPage,
                                                                     handlePrevious,
                                                                     handleNext
                                                                 }) => {
    // Gestionnaire de changement de page
    const handleChange = (event: React.ChangeEvent<unknown>, page: number) => {
        if (page < currentPage) {
            handlePrevious();
        } else if (page > currentPage) {
            handleNext();
        }
        goToPage(page);
    };

    return (
        <div style={{ float: 'right' }}>
            <Stack spacing={2} alignItems="center" mt={3}>
                <StyledPagination
                    count={totalPages}
                    page={currentPage}
                    onChange={handleChange}
                    shape="rounded"
                />
            </Stack>
        </div>
    );
};

export default PaginationComponent;
