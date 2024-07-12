const InputSearch = () => {
  return (
    <div className="input-group mt-3">
      <input
        type="text"
        className="form-control"
        placeholder="Search"
        aria-label="Search"
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary btn-sm h-100">GO</button>
      </div>
    </div>
  );
};
export default InputSearch;
