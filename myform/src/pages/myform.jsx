import React from "react"
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card"
import { Input  } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

function MyForm() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="">
          <CardTitle className="">My Form</CardTitle>
        </CardHeader>
        <CardContent className="">
          <form className="space-y-4">
            <div>
              <Label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</Label>
              <Input type="text" id="name" name="name" placeholder="Enter your name" className="mt-1 block w-full" />
            </div>
            <div>
              <Label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</Label>
              <Input type="email" id="email" name="email" placeholder="Enter your email" className="mt-1    block w-full" />
            </div>
            <Button type="submit" className="w-full">Submit</Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}

export default MyForm