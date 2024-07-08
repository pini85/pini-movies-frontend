import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { useForm, FormProvider } from "react-hook-form";
import useGetSuggestions from "@/hooks/reactQuery/useGetSuggestions";
import Suggestion from "@/components/ui/Suggestions/Suggestions";
import Button from "@/components/ui/Button/Button";
import Input from "@/components/ui/Input/Input.component";

const Search = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const { suggestions } = useGetSuggestions(
    searchQuery,
    true,
    true,
    4,
    2,
    "Acting"
  );

  const methods = useForm();

  let navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    setSearchQuery("");
    navigate(`/search/search/${searchQuery}/page/1`);
  };
  const container = {
    display: "flex",
    alignItems: "center",
  };
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const showSuggestions = Object.keys(suggestions).length && searchQuery.length;

  return (
    <>
      <FormProvider {...methods}>
        <form style={container} onSubmit={handleClick}>
          <div style={{ display: "flex", gap: "1rem" }}>
            <Input
              name="search"
              type="search"
              label="Search"
              value={searchQuery}
              handleOnChange={handleChange}
              placeholder="Search"
            />

            <Button icon="search" title="search"></Button>
          </div>
        </form>
      </FormProvider>

      {showSuggestions > 0 && (
        <Suggestion suggestions={suggestions} setSearchQuery={setSearchQuery} />
      )}
    </>
  );
};

export default Search;
