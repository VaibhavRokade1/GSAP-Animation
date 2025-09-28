import gsap from "gsap";

function App() {
  const boxRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(
      boxRef.current,
      { opacity: 0, y: 50 }, // starting state
      { opacity: 1, y: 0, duration: 1, ease: "power3.out" } // ending state
    );
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      <div
        ref={boxRef}
        className="w-32 h-32 bg-blue-500 flex justify-center items-center text-white rounded-lg"
      >
        Hello
      </div>
    </div>
  );
}

export default App;
