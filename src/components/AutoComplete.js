import React, { useEffect, useState, useRef } from "react";
import { getStarwarsCharacters } from '../api'
import styled from "styled-components";
import Loading from "./Loading";
import { arraySortByValue } from "../utils/arrayUtils";

const StyledAutoComplete = styled.div`
position: relative;
display:flex;
flex-direction: column;
maxWidth: 200px;
justify-content: center;
align-items: center;
`;

const StyledInputBox = styled.input`
padding: 10px;
border: 1px solid purple;
margin: 10px;
font-size: 18px;
text-transform: capitalize;
`;

const StyledDisplay = styled.div`
border-width: 0px 1px 1px 1px;
    border-style: solid;
    background-color: beige;
    color: black;
    margin-top: -11px;
    width: 207px;
    position: absolute;
    top: 64px;
    opacity: .8;
`;

const StyledDisplayItem = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
padding: 5px;
cursor: pointer;

&:hover {
    background-color: white;
}
`;

const AutoComplete = (props) => {
    const [display, setDisplay] = useState(false);
    const [characters, setCharacters] = useState([]); // TODO: get from appState instead
    const [search, setSearch] = useState("");
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState();

    const wrapperRef = useRef(null)

    useEffect(() => {
        const fetchStarwarsCharacters = async () => {
            try {
                const { results } = await getStarwarsCharacters();
                setCharacters(results);
            } catch (e) {
                setError(e);
            }
            setIsLoading(false);
        };
        fetchStarwarsCharacters();
    }, []);

    useEffect(() => {
        window.addEventListener("mousedown", handleClickOutside);
        return () => {
            window.removeEventListener("mousedown", handleClickOutside);
        };
    });

    const handleClickOutside = event => {
        const { current: wrap } = wrapperRef;
        if (wrap && !wrap.contains(event.target)) {
            setDisplay(false);
        }
    };

    const addCharacter = character => {
        setSearch(character);
        setDisplay(false);
    };

    if (isLoading) {
        return <Loading />;
    }

    if (error) {
        return <div>{error.message}</div>;
    }

    console.log(characters)

    return (
        <StyledAutoComplete ref={wrapperRef}>
            <StyledInputBox
                id="auto"
                onClick={() => setDisplay(!display)}
                placeholder="Search Characters"
                value={search}
                onChange={event => setSearch(event.target.value)}
            />
            {display && (
                <StyledDisplay>
                    {characters
                        .filter(({ name }) => name.indexOf(search.toLowerCase()) > -1)
                        .map((character, i) => {
                            return (
                                <StyledDisplayItem
                                    onClick={() => addCharacter(character.name)}
                                    key={i}
                                    tabIndex="0"
                                >
                                    {character.name}
                                </StyledDisplayItem>
                            );
                        })}
                </StyledDisplay>
            )}
        </StyledAutoComplete>
    );
};

export default AutoComplete;