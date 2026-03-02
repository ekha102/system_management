const maintenance = () => {
  return (
    <>
      <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="bg-white p-10 rounded-xl shadow-lg text-center max-w-md">
        <h1 className="text-3xl font-bold text-yellow-600">
          🚧 System Maintenance
        </h1>
        <p className="mt-4 text-gray-600">
          The system is currently under maintenance.
        </p>
        <p className="mt-2 text-gray-500 text-sm">
          Please check back shortly.
        </p>
      </div>
    </div>
    </>
  )
}
export default maintenance;