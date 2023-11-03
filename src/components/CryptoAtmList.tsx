import { useState } from "react";
import { useTypedSelector } from "../hooks/useTypedSelector";
import { useActions } from "../hooks/useActions";

const CryptoAtmList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchCryptoAtms } = useActions();
  const { data, error, loading } = useTypedSelector(
    (state) => state.cryptoAtms
  );

  const onSubmit = (e: any) => {
    e.preventDefault();
    searchCryptoAtms(term);
  };

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>Loading...</h3>}
      {!error && !loading && data}
    </div>
  );
};

export default CryptoAtmList;
