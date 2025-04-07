import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-start p-8">
      <h1 className="mb-12 text-4xl font-bold text-black">Dashboard</h1>

      <div className="grid w-full max-w-4xl grid-cols-1 gap-8 md:grid-cols-2">
        <Link
          to="/convert-url-to-json"
          className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">URL to JSON Converter</h2>
            <p className="text-gray-600">Convert URL encoded strings to JSON format</p>
          </div>
        </Link>

        <Link
          to="/mp3-player"
          className="rounded-lg bg-white p-8 shadow-lg transition-shadow duration-300 hover:shadow-xl"
        >
          <div className="text-center">
            <h2 className="mb-4 text-2xl font-bold text-gray-800">MP3 Player</h2>
            <p className="text-gray-600">Play MP3 files with speed control and time navigation</p>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Dashboard;
