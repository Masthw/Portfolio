const Toast = ({ message, type = "success", onClose }) => {
  return (
    <div
      className={`fixed bottom-5 right-5 z-50 px-4 py-3 rounded-lg shadow-lg
        ${type === "success" ? "bg-green-500" : "bg-red-500"} text-white`}
    >
      <div className="flex items-center gap-2">
        <p>{message}</p>
        <button onClick={onClose} className="font-bold cursor-pointer">✕</button>
      </div>
    </div>
  );
};

export default Toast;
