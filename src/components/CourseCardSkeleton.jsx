import React from "react";
import { Card, CardContent } from "@/components/ui/card";

export default function CourseCardSkeleton() {
  return (
    <Card className="h-full border-0 overflow-hidden bg-white animate-pulse">
      {/* Image skeleton */}
      <div className="w-full h-52 bg-gradient-to-br from-gray-200 via-gray-300 to-gray-200"></div>
      
      <CardContent className="p-5 space-y-4">
        {/* Title skeleton */}
        <div className="space-y-2">
          <div className="h-4 w-3/4 bg-gray-200 rounded"></div>
          <div className="h-4 w-1/2 bg-gray-200 rounded"></div>
        </div>
        
        {/* Description skeleton */}
        <div className="space-y-2">
          <div className="h-3 w-full bg-gray-200 rounded"></div>
          <div className="h-3 w-5/6 bg-gray-200 rounded"></div>
        </div>
        
        {/* Icons skeleton */}
        <div className="flex items-center gap-2">
          <div className="h-10 flex-1 bg-gray-200 rounded-xl"></div>
          <div className="h-10 flex-1 bg-gray-200 rounded-xl"></div>
        </div>
        
        {/* Rating skeleton */}
        <div className="h-6 w-24 bg-gray-200 rounded"></div>
      </CardContent>
    </Card>
  );
}
