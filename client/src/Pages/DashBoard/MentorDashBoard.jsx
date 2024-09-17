import { Avatar } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MessageSquare, Clock, Users } from "lucide-react"

export default function CoachProfile() {
  return (
    <div className="w-full max-w-4xl mx-auto">
      {/* Header with autumn background */}
      <div className="relative h-40 bg-gradient-to-r from-orange-200 to-orange-100 rounded-t-lg overflow-hidden">
        <div className="absolute inset-0 flex items-end justify-end p-4">
          <img src="/placeholder.svg?height=100&width=100" alt="Mascot" className="h-24 w-24" />
        </div>
      </div>

      {/* Profile information */}
      <div className="bg-white p-6 shadow-sm flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Avatar className="h-20 w-20">
            <img src="/placeholder.svg?height=80&width=80" alt="Pratimesh Tiwari" />
          </Avatar>
          <div>
            <h1 className="text-2xl font-bold">Pratimesh Tiwari</h1>
            <p className="text-gray-600">Developer, Team - India</p>
            <div className="flex items-center mt-2">
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded">Coachee</span>
              <div className="ml-4 flex items-center">
                <span className="mr-2">Coachee</span>
                <div className="w-12 h-6 bg-green-500 rounded-full flex items-center">
                  <div className="w-5 h-5 bg-white rounded-full ml-1"></div>
                </div>
                <span className="ml-2">Coach</span>
              </div>
            </div>
          </div>
        </div>
        <div className="space-x-2">
          <Button variant="outline">Get Support</Button>
          <Button>Schedule Session</Button>
        </div>
      </div>

      {/* Coaching highlights */}
      <Card className="mt-6 p-6">
        <h2 className="text-lg font-semibold mb-4">Coachee Highlights</h2>
        <div className="grid grid-cols-4 gap-4">
          {[
            { icon: MessageSquare, value: 8, label: "Total no. Coaching Sessions" },
            { icon: Clock, value: 4, label: "Avg Coaching Hours/Coach" },
            { icon: Clock, value: 4, label: "Total Coaching Hours" },
            { icon: Users, value: 1, label: "No. of Coaches Engaged" },
          ].map((item, index) => (
            <div key={index} className="flex items-center space-x-2">
              <item.icon className="h-8 w-8 text-blue-600" />
              <div>
                <p className="text-2xl font-bold">{item.value}</p>
                <p className="text-sm text-gray-600">{item.label}</p>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* Tabs for sessions, notes, and feedback */}
      <Tabs defaultValue="upcoming" className="mt-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming Sessions</TabsTrigger>
          <TabsTrigger value="completed">Completed Sessions</TabsTrigger>
          <TabsTrigger value="notes">Notes</TabsTrigger>
          <TabsTrigger value="feedback">Feedback</TabsTrigger>
        </TabsList>
        <TabsContent value="upcoming">
          <Card>
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar>
                  <img src="/placeholder.svg?height=40&width=40" alt="Amritpal Singh" />
                </Avatar>
                <div>
                  <h3 className="font-semibold">Testing</h3>
                  <p className="text-sm text-gray-600">TEST</p>
                  <p className="text-sm text-gray-600">with Amritpal Singh, Computer Science Hod</p>
                </div>
              </div>
              <div className="space-x-2">
                <Button variant="outline" size="sm">Edit</Button>
                <Button variant="outline" size="sm">Notes</Button>
                <Button size="sm">Start</Button>
              </div>
            </div>
          </Card>
        </TabsContent>
        {/* Add content for other tabs as needed */}
      </Tabs>
    </div>
  )
}