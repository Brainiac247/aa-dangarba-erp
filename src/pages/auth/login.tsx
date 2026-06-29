export default function Login() {
  return (
    <div
      style={{
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "#0B2345",
      }}
    >
      <div
        style={{
          width: 420,
          background: "#fff",
          padding: 40,
          borderRadius: 12,
        }}
      >
        <h2>AA Dangarba Energy Services ERP</h2>

        <input
          placeholder="Username"
          style={{ width: "100%", padding: 12, marginTop: 20 }}
        />

        <input
          type="password"
          placeholder="Password"
          style={{ width: "100%", padding: 12, marginTop: 15 }}
        />

        <button
          style={{
            width: "100%",
            marginTop: 25,
            padding: 12,
            background: "#003366",
            color: "#fff",
            border: "none",
          }}
        >
          Login
        </button>
      </div>
    </div>
  );
}