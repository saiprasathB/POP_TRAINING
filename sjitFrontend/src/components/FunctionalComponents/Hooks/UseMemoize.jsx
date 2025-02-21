import useMemorizingHook from "./CustomHooks/MemorizingHook";
const UseMemoize = () => {
  var [custId, setcustId] = useMemorizingHook("CustomerId", "");
  var [pass, setpass] = useMemorizingHook("Password", "");

  return (
    <div>
      <h1>THis is a custom Hook</h1>
      Customer Id :{" "}
      <input
        type="text"
        value={custId}
        onChange={(e) => setcustId(e.target.value)}
      />
      Password :{" "}
      <input
        type="text"
        value={pass}
        onChange={(e) => setpass(e.target.value)}
      />
      <button>Login</button>
    </div>
  );
};
export default UseMemoize;
