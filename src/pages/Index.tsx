
import React, { useState } from 'react';
import { Building, Library, Coffee, Dumbbell, Monitor, Beaker, Users, RotateCcw } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

interface BuildingData {
  id: string;
  name: string;
  icon: React.ComponentType<any>;
  amenities: Array<{
    name: string;
    icon: React.ComponentType<any>;
  }>;
  color: string;
  bgGradient: string;
}

const buildingsData: BuildingData[] = [
  {
    id: 'BLR01',
    name: 'BLR01',
    icon: Building,
    amenities: [
      { name: 'Cafeteria', icon: Coffee },
      { name: 'Recreational Room', icon: Library },
      { name: 'Badmintion Court', icon: Users }
    ],
    color: 'from-blue-500 to-purple-600',
    bgGradient: 'bg-gradient-to-br from-blue-50 to-purple-50'
  },
  {
    id: 'BLR02',
    name: 'BLR02',
    icon: Building,
    amenities: [
      { name: 'StartUp Studio', icon: Dumbbell },
      { name: 'Corporate Lounge', icon: Users }
    ],
    color: 'from-green-500 to-teal-600',
    bgGradient: 'bg-gradient-to-br from-green-50 to-teal-50'
  },
  {
    id: 'BLR03',
    name: 'BLR03',
    icon: Building,
    amenities: [
      { name: 'IT Support', icon: Monitor },
      { name: 'Conference Halls', icon: Users }
    ],
    color: 'from-orange-500 to-red-600',
    bgGradient: 'bg-gradient-to-br from-orange-50 to-red-50'
  },
  {
    id: 'BLR04',
    name: 'BLR04',
    icon: Building,
    amenities: [
      { name: 'Nap Room with Massage Chair', icon: Monitor },
      { name: 'Corporate Lounge', icon: Users }
    ],
    color: 'from-purple-500 to-pink-600',
    bgGradient: 'bg-gradient-to-br from-purple-50 to-pink-50'
  },
  {
    id: 'BLR05',
    name: 'BLR05',
    icon: Building,
    amenities: [
      { name: 'Hive Area', icon: Users },
      { name: 'Experience Center', icon: Building }
    ],
    color: 'from-indigo-500 to-blue-600',
    bgGradient: 'bg-gradient-to-br from-indigo-50 to-blue-50'
  }
];

const Index = () => {
  const [expandedBuilding, setExpandedBuilding] = useState<string | null>(null);

  const handleBuildingClick = (buildingId: string) => {
    setExpandedBuilding(expandedBuilding === buildingId ? null : buildingId);
  };

  const handleReset = () => {
    setExpandedBuilding(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 p-4 md:p-8">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tight">
            🏢 SAP Campus Tour
          </h1>
          <p className="text-blue-200 text-lg md:text-xl font-medium">
            Discover our office buildings
          </p>
        </div>

        {/* Reset Button */}
        <div className="flex justify-center mb-8">
          <Button
            onClick={handleReset}
            variant="outline"
            size="lg"
            className="bg-white/10 backdrop-blur-sm border-white/20 text-white hover:bg-white/20 transition-all duration-300 font-semibold px-6 py-3"
          >
            <RotateCcw className="w-5 h-5 mr-2" />
            Reset View
          </Button>
        </div>

        {/* Buildings Grid */}
        <div className="space-y-4">
          {buildingsData.map((building) => {
            const isExpanded = expandedBuilding === building.id;
            const IconComponent = building.icon;

            return (
              <Card
                key={building.id}
                className={`cursor-pointer transform transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] ${isExpanded
                  ? 'bg-white/95 backdrop-blur-lg shadow-2xl ring-2 ring-white/50'
                  : 'bg-white/20 backdrop-blur-sm hover:bg-white/30 shadow-lg'
                  }`}
                onClick={() => handleBuildingClick(building.id)}
              >
                <CardContent className="p-6">
                  {/* Building Header */}
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-xl bg-gradient-to-r ${building.color} shadow-lg`}>
                      <IconComponent className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1">
                      <h3 className={`text-2xl font-bold transition-colors duration-300 ${isExpanded ? 'text-gray-800' : 'text-white'
                        }`}>
                        {building.name}
                      </h3>
                      <p className={`text-sm font-medium transition-colors duration-300 ${isExpanded ? 'text-gray-600' : 'text-blue-200'
                        }`}>
                        {isExpanded ? 'Tap to collapse' : 'Tap to explore'}
                      </p>
                    </div>
                    <div className={`transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'rotate-0'
                      }`}>
                      <div className={`w-3 h-3 border-r-2 border-b-2 transform rotate-45 ${isExpanded ? 'border-gray-600' : 'border-white'
                        }`} />
                    </div>
                  </div>

                  {/* Building Amenities */}
                  <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isExpanded ? 'max-h-96 opacity-100 mt-6' : 'max-h-0 opacity-0'
                    }`}>
                    <div className={`p-4 rounded-xl ${building.bgGradient} border border-gray-200`}>
                      <h4 className="text-lg font-semibold text-gray-800 mb-4">
                        Available Amenities
                      </h4>
                      <div className="grid gap-3">
                        {building.amenities.map((amenity, index) => {
                          const AmenityIcon = amenity.icon;
                          return (
                            <div
                              key={index}
                              className="flex items-center space-x-3 p-3 bg-white/60 rounded-lg transform transition-all duration-300 hover:bg-white/80 hover:scale-[1.02]"
                              style={{
                                animationDelay: `${index * 100}ms`
                              }}
                            >
                              <div className={`p-2 rounded-lg bg-gradient-to-r ${building.color} shadow-sm`}>
                                <AmenityIcon className="w-5 h-5 text-white" />
                              </div>
                              <span className="font-medium text-gray-800">
                                {amenity.name}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 pb-4">
          <p className="text-white/60 text-sm">
            Welcome to our campus! Enjoy your tour 🌟
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
