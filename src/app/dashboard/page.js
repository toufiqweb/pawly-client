import Link from "next/link";

export default function DashboardHomePage() {
  return (
    <div className="p-6 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-foreground">
          Welcome to Your Dashboard
        </h1>
        <p className="text-muted-foreground mt-1">
          Manage your pets, requests, and activity in one place.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-xl border bg-background shadow-sm">
          <h3 className="text-sm text-muted-foreground">Total Pets</h3>
          <p className="text-2xl font-bold mt-2">--</p>
        </div>

        <div className="p-6 rounded-xl border bg-background shadow-sm">
          <h3 className="text-sm text-muted-foreground">Adoption Requests</h3>
          <p className="text-2xl font-bold mt-2">--</p>
        </div>

        <div className="p-6 rounded-xl border bg-background shadow-sm">
          <h3 className="text-sm text-muted-foreground">Approved Adoptions</h3>
          <p className="text-2xl font-bold mt-2">--</p>
        </div>
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Activity / Placeholder */}
        <div className="lg:col-span-2 p-6 rounded-xl border bg-background shadow-sm min-h-62.5">
          <h2 className="text-lg font-semibold mb-4">Recent Activity</h2>

          <div className="space-y-3 text-sm text-muted-foreground">
            <div className="p-3 rounded-lg bg-muted/40">
              No activity yet. Your updates will appear here.
            </div>
            <div className="p-3 rounded-lg bg-muted/40">
              Add pets or receive adoption requests to see updates.
            </div>
          </div>
        </div>

        {/* Right: Quick Actions */}
        <div className="p-6 rounded-xl border bg-background shadow-sm">
          <h2 className="text-lg font-semibold mb-4">Quick Actions</h2>

          <div className="space-y-3">
            <Link href={"/dashboard/add-pet"} className="mb-3">
              <button className="w-full py-2 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition">
                Add New Pet
              </button>
            </Link>

            <Link href={"/dashboard/my-listings"}>
              <button className="w-full py-2 rounded-lg border hover:bg-muted transition">
                View My Pets
              </button>
            </Link>

            <Link href={"/dashboard/my-requests"}>
              <button className="w-full py-2 rounded-lg border hover:bg-muted transition">
                Check Requests
              </button>
            </Link>
          </div>
        </div>
      </div>

      {/* Footer Note */}
      <div className="text-xs text-muted-foreground">
        Tip: Later you can connect this dashboard with real-time analytics,
        charts, and API data.
      </div>
    </div>
  );
}
