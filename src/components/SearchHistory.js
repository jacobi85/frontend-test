import React from "react";
import styled from "styled-components";
import { clearLocalHistory, removeSearchItemToLocalHistory } from "../state/actions";
import { useAppState } from "../state/AppStateContext";

const StyledSearchHistory = styled.section`
background-color: rgb(31,39,44);
padding: 30px;
position: relative;
`;

const StyledButton = styled.button`
background-color: #FF370D;
color: white;
cursor: pointer;
border: 1px solid white;
`;
const StyledClearHistoryButton = styled(StyledButton)`
position: absolute;
right: 0;
top: 20px;
right: 20px;
`;

const SearchHistory = (props) => {
    const { dispatch, savedCharacters } = useAppState();

    if (savedCharacters?.length === 0) {
        return null;
    }
    return (
        <StyledSearchHistory>
            <StyledClearHistoryButton onClick={() => { dispatch(clearLocalHistory()) }} >Clear History</StyledClearHistoryButton>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Timestamp</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {savedCharacters.map(({ name, timeStamp }, index) =>
                        <tr key={index}>
                            <td>{name}</td>
                            <td>{timeStamp}</td>
                            <td><StyledButton onClick={() => dispatch(removeSearchItemToLocalHistory(name))}>Delete</StyledButton></td>
                        </tr>)}
                </tbody>
            </table>
        </StyledSearchHistory>
    );
};

export default SearchHistory;
