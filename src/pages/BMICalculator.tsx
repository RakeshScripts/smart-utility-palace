import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Heart } from "lucide-react";

const BMICalculator = () => {
  const [weight, setWeight] = useState<string>("70");
  const [height, setHeight] = useState<string>("170");
  const [unit, setUnit] = useState<string>("metric");
  const [bmi, setBmi] = useState<number | null>(null);
  const [category, setCategory] = useState<string>("");

  const calculateBMI = () => {
    let bmiValue: number;
    
    if (unit === "metric") {
      const weightKg = parseFloat(weight);
      const heightM = parseFloat(height) / 100;
      bmiValue = weightKg / (heightM * heightM);
    } else {
      const weightLbs = parseFloat(weight);
      const heightIn = parseFloat(height);
      bmiValue = (weightLbs / (heightIn * heightIn)) * 703;
    }

    setBmi(Math.round(bmiValue * 10) / 10);
    
    if (bmiValue < 18.5) {
      setCategory("Underweight");
    } else if (bmiValue >= 18.5 && bmiValue < 25) {
      setCategory("Normal weight");
    } else if (bmiValue >= 25 && bmiValue < 30) {
      setCategory("Overweight");
    } else {
      setCategory("Obese");
    }
  };

  const getCategoryColor = () => {
    switch (category) {
      case "Underweight":
        return "text-blue-600";
      case "Normal weight":
        return "text-green-600";
      case "Overweight":
        return "text-orange-600";
      case "Obese":
        return "text-red-600";
      default:
        return "";
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <Heart className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">BMI Calculator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your Body Mass Index (BMI) to understand if you're at a healthy weight for your height.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Calculator Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Measurements</CardTitle>
                <CardDescription>Enter your weight and height to calculate BMI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-3">
                  <Label>Unit System</Label>
                  <RadioGroup value={unit} onValueChange={setUnit}>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="metric" id="metric" />
                      <Label htmlFor="metric" className="font-normal cursor-pointer">
                        Metric (kg, cm)
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="imperial" id="imperial" />
                      <Label htmlFor="imperial" className="font-normal cursor-pointer">
                        Imperial (lbs, inches)
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="weight">
                    Weight ({unit === "metric" ? "kg" : "lbs"})
                  </Label>
                  <Input
                    id="weight"
                    type="number"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                    placeholder={unit === "metric" ? "70" : "154"}
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="height">
                    Height ({unit === "metric" ? "cm" : "inches"})
                  </Label>
                  <Input
                    id="height"
                    type="number"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                    placeholder={unit === "metric" ? "170" : "67"}
                  />
                </div>

                <Button 
                  onClick={calculateBMI} 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Calculate BMI
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card>
              <CardHeader>
                <CardTitle>Your Results</CardTitle>
                <CardDescription>BMI calculation and health category</CardDescription>
              </CardHeader>
              <CardContent>
                {bmi !== null ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Your BMI</p>
                      <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-4">
                        {bmi}
                      </p>
                      <p className={`text-xl font-semibold ${getCategoryColor()}`}>
                        {category}
                      </p>
                    </div>
                    
                    <div className="space-y-3">
                      <div className="flex justify-between items-center p-3 rounded-lg bg-blue-50 dark:bg-blue-950/20">
                        <span>Underweight</span>
                        <span className="font-semibold">&lt; 18.5</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 rounded-lg bg-green-50 dark:bg-green-950/20">
                        <span>Normal weight</span>
                        <span className="font-semibold">18.5 - 24.9</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 rounded-lg bg-orange-50 dark:bg-orange-950/20">
                        <span>Overweight</span>
                        <span className="font-semibold">25 - 29.9</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-3 rounded-lg bg-red-50 dark:bg-red-950/20">
                        <span>Obese</span>
                        <span className="font-semibold">≥ 30</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Heart className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter your measurements and click Calculate to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>What is BMI?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  Body Mass Index (BMI) is a measure of body fat based on height and weight that applies to adult men and women. It was developed by Belgian statistician Adolphe Quetelet in the 1830s.
                </p>
                <p>
                  BMI is calculated by dividing a person's weight in kilograms by their height in meters squared. While BMI doesn't directly measure body fat, it provides a useful indicator of whether someone is at a healthy weight.
                </p>
                <p>
                  <strong>Important:</strong> BMI is a screening tool and should not be used as a diagnostic tool. Consult healthcare professionals for personalized health advice.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>BMI Limitations</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  While BMI is widely used, it has some limitations:
                </p>
                <ul>
                  <li>It doesn't distinguish between muscle and fat mass</li>
                  <li>Athletes may have high BMI due to muscle, not fat</li>
                  <li>It doesn't account for age or gender differences</li>
                  <li>Distribution of fat matters (waist circumference is also important)</li>
                  <li>Different ethnicities may have different healthy BMI ranges</li>
                </ul>
                <p>
                  For a complete health assessment, consider other factors like waist circumference, body composition, and overall fitness level.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Health Tips Section */}
          <Card>
            <CardHeader>
              <CardTitle>Maintaining a Healthy Weight</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Balanced Diet</h3>
                <p className="text-muted-foreground">
                  Eat a variety of nutrient-rich foods including fruits, vegetables, whole grains, lean proteins, and healthy fats. Avoid excessive processed foods, sugary drinks, and saturated fats.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Regular Physical Activity</h3>
                <p className="text-muted-foreground">
                  Aim for at least 150 minutes of moderate-intensity aerobic activity or 75 minutes of vigorous-intensity activity per week. Include strength training exercises at least twice a week.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Adequate Sleep</h3>
                <p className="text-muted-foreground">
                  Get 7-9 hours of quality sleep each night. Poor sleep is associated with weight gain and difficulty maintaining a healthy weight.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Stress Management</h3>
                <p className="text-muted-foreground">
                  Chronic stress can lead to weight gain. Practice stress-reduction techniques like meditation, yoga, deep breathing, or engaging in hobbies you enjoy.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Stay Hydrated</h3>
                <p className="text-muted-foreground">
                  Drink plenty of water throughout the day. Sometimes thirst can be mistaken for hunger. Aim for 8 glasses (2 liters) of water daily.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default BMICalculator;
