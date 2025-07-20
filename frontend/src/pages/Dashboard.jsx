const Dashboard = () => {
  return (
    <div className="min-h-screen bg-secondary-50 py-8">
      <div className="container-max-width section-padding">
        <h1 className="text-3xl font-bold text-secondary-900 mb-8">
          Dashboard
        </h1>
        
        <div className="card p-8 text-center">
          <h2 className="text-xl font-semibold text-secondary-900 mb-4">
            Welcome to your dashboard!
          </h2>
          <p className="text-secondary-600">
            This is a protected route that requires authentication. 
            Here you can manage your portfolio items, update your profile, and more.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
