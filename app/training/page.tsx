import React from 'react';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardHeader, 
  CardTitle 
} from "@/components/ui/card";
import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Terminal, BookOpen, Github, Network, CheckCircle, Youtube } from 'lucide-react';

const Training = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 space-y-6">
      {/* Header */}
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold mb-4">Smoke & Mirrors Co-Op Training Portal</h1>
        <p className="text-lg text-gray-600">Welcome!</p>
      </div>

      {/* WSL Setup Section */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Terminal className="h-6 w-6" />
            Environment Setup Guide
          </CardTitle>
          <CardDescription>
            Complete setup guide for WSL and VS Code
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Accordion type="single" collapsible>
            <AccordionItem value="wsl-setup">
              <AccordionTrigger>Step 1: Enable WSL in Windows</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>1. Open PowerShell as Administrator</p>
                  <ul className="list-disc pl-6">
                    <li>Press Windows key</li>
                    <li>Type "PowerShell"</li>
                    <li>Right-click and select "Run as administrator"</li>
                  </ul>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code>wsl --install</code>
                  </div>
                  <Alert>
                    <CheckCircle className="h-4 w-4" />
                    <AlertTitle>Note</AlertTitle>
                    <AlertDescription>
                      Restart your computer when prompted to complete the installation.
                    </AlertDescription>
                  </Alert>
                </div>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="ubuntu-install">
              <AccordionTrigger>Step 2: Install Ubuntu</AccordionTrigger>
              <AccordionContent>
                <ol className="list-decimal pl-6 space-y-4">
                  <li>Open Microsoft Store and search for "Ubuntu"</li>
                  <li>Install the latest version of Ubuntu</li>
                  <li>Launch Ubuntu and create your credentials
                    <Alert className="mt-2">
                      <AlertDescription>
                        Remember to use lowercase for username and memorize your password!
                      </AlertDescription>
                    </Alert>
                  </li>
                </ol>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="vscode-setup">
              <AccordionTrigger>Step 3: VS Code Setup</AccordionTrigger>
              <AccordionContent>
                <div className="space-y-4">
                  <p>1. Download and install VS Code from the official website</p>
                  <p>2. Install the WSL extension</p>
                  <div className="bg-gray-100 p-4 rounded-md">
                    <code>code .</code>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </CardContent>
      </Card>

      {/* Required Training Section */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <BookOpen className="h-6 w-6" />
            Required Training Courses
          </CardTitle>
          <CardDescription>
            Complete these courses in the Adtran Learning Network (ALN)
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {[
              "Fundamentals of Telecommunications and Data Communications",
              "Introduction to Internetworking Networking Basics",
              "Introduction to Internetworking Data Delivery",
              "Introduction to Internetworking Network Protocols",
              "Adtran Total Access 5000 CLI Overview"
            ].map((course, index) => (
              <div key={index} className="flex items-center gap-2 p-2 bg-gray-50 rounded-lg">
                <CheckCircle className="h-5 w-5 text-gray-400" />
                <span>{course}</span>
              </div>
            ))}
          </div>

        
        </CardContent>
      </Card>

      {/* Additional Resources */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Network className="h-6 w-6" />
            Additional Resources
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4">
            <a 
              href="https://confluence.adtran.com/pages/viewpage.action?pageId=41773397"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <BookOpen className="h-5 w-5" />
              <span>ADTRAN Equipment Guide</span>
            </a>
            <a 
              href="https://confluence.adtran.com/display/AccAggSw/Helpful+information+from+previous+Co-ops"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Github className="h-5 w-5" />
              <span>Previous Co-op Resources</span>
            </a>
            <a 
              href="https://youtu.be/VchuKL44s6E"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>Python</span>
            </a>

            <a 
              href="http://www.youtube.com/watch?v=cHYq1MRoyI0&authuser=0"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>Pytest</span>
            </a>
            <a 
              href="https://www.youtube.com/watch?v=USjZcfj8yxE&authuser=0"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>GIT</span>
            </a>
            <a 
              href="https://youtu.be/3b_TAYtzuho?si=si7xZS8-I-5bXDdk"
              className="flex items-center gap-2 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
            >
              <Youtube className="h-5 w-5" />
              <span>OSI layer and TCP/IP explained</span>
            </a>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Training;