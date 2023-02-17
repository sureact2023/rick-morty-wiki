import React, { useEffect, useState } from "react";
import { characterInstance } from "../axios/axiosHttp";
import { charactersNamespace } from "../types.d";
import { AxiosResponse } from "axios";
import SearchBar from "../components/SearchBar";
import Cards from "../components/Cards";
import Pagination from "../components/Pagination";

const Characters = () => {
  const [page, setPage] = useState<number>(1);
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [totalPages, setTotalPages] = useState<number>(0);
  const [result, setResult] = useState<charactersNamespace.iCharacters[]>([]);
  console.log(result);

  useEffect(() => {
    (async () => {
      const data = await characterInstance
        .get(`?name=${searchTerm}&page=${page}`)
        .then((res: AxiosResponse) => {
          setResult(res?.data?.results);
          setTotalPages(res?.data?.info?.pages);
        });
      // console.log(data);
    })();
  }, [page, searchTerm]);

  return (
    <div className="container mt-3">
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <Pagination setPage={setPage} page={page} totalPages={totalPages} />
      <div className="row">
        {result?.map(
          (value: charactersNamespace.iCharacters, index: number) => {
            // spread operator
            // while passing props on components or when calling functions we use spread operator
            // while writing arguments in functions(including functional components) we use rest operator
            // https://www.freecodecamp.org/news/javascript-rest-vs-spread-operators/
            return <Cards key={index} {...value} />;
          }
        )}
      </div>
    </div>
  );
};

export default Characters;
