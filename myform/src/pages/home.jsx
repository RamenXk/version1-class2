import React from "react";
import { Card, CardTitle, CardContent, CardHeader } from "@/components/ui/card";
import { Link } from "react-router-dom";
function Home() {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-4">
      <Card className="max-w-md w-full">
        <CardHeader className="">
          <CardTitle className="">Welcome to MyForm</CardTitle>
        </CardHeader>
        <CardContent className="">
          <p className="text-sm text-gray-500">
            This is a simple form builder built with React, Vite, and Tailwind CSS.
          </p>
            <Link to="/myform" className="mt-4 inline-block text-blue-500 hover:underline">
              Go to MyForm
            </Link>
        </CardContent>
      </Card>
    </div>
  );
}

export default Home;