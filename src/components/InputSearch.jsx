import { useState } from "react";
import { Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { fetchTracksAction } from "../action/action";
import { useNavigate } from "react-router-dom";

const InputSearch = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(fetchTracksAction(query, "SEARCH"));
    navigate("/search/" + query);
  };
  return (
    <Form onSubmit={handleSubmit} className="input-group mt-3">
      <Form.Control
        type="search"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
        value={query}
        onChange={handleChange}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
      </div>
    </Form>
  );
};
export default InputSearch;
