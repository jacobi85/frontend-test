import React from "react";
import styled from "styled-components";
import { StyledContainer } from "../styles/global";

const StyledSearchHistory = styled.section`
background-color: rgb(31,39,44);
padding: 30px;
`;

const SearchHistory = (props) => {
    return (
        <StyledSearchHistory>
            <table>
                <tr>
                    <td>Character name</td>
                    <td>2021-02-14</td>
                    <td>delete</td>
                </tr>
            </table>
        </StyledSearchHistory>
    );
};

export default SearchHistory;
