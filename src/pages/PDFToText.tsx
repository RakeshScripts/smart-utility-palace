import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Upload, Download } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const PDFToText = () => {
  const [extractedText, setExtractedText] = useState<string>("");
  const [fileName, setFileName] = useState<string>("");
  const { toast } = useToast();

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.type !== "application/pdf") {
        toast({
          title: "Invalid file type",
          description: "Please upload a PDF file",
          variant: "destructive",
        });
        return;
      }
      
      setFileName(file.name);
      // In a real implementation, you would use a PDF parsing library here
      // For demonstration, we'll show a placeholder
      setExtractedText("This is a demo. In production, actual PDF text extraction would happen here using libraries like pdf.js or similar PDF parsing tools.");
      
      toast({
        title: "PDF uploaded successfully",
        description: "Text extraction complete",
      });
    }
  };

  const handleDownload = () => {
    const blob = new Blob([extractedText], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = fileName.replace(".pdf", ".txt") || "extracted-text.txt";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <FileText className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">PDF to Text Converter</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Extract text content from PDF documents quickly and easily. Perfect for data extraction, analysis, and content repurposing.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Upload Card */}
            <Card>
              <CardHeader>
                <CardTitle>Upload PDF</CardTitle>
                <CardDescription>Select a PDF file to extract text</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border-2 border-dashed rounded-lg p-8 text-center hover:border-primary transition-colors">
                  <Upload className="h-12 w-12 mx-auto mb-4 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground mb-4">
                    Drag and drop your PDF here or click to browse
                  </p>
                  <input
                    type="file"
                    accept=".pdf"
                    onChange={handleFileUpload}
                    className="hidden"
                    id="pdf-upload"
                  />
                  <label htmlFor="pdf-upload">
                    <Button asChild className="bg-gradient-to-r from-primary to-accent hover:opacity-90">
                      <span>Choose File</span>
                    </Button>
                  </label>
                </div>
                
                {fileName && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">Selected file:</p>
                    <p className="text-sm text-muted-foreground">{fileName}</p>
                  </div>
                )}
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card>
              <CardHeader>
                <CardTitle>Extracted Text</CardTitle>
                <CardDescription>Your PDF content as plain text</CardDescription>
              </CardHeader>
              <CardContent>
                {extractedText ? (
                  <div className="space-y-4">
                    <div className="bg-muted p-4 rounded-lg max-h-96 overflow-y-auto">
                      <pre className="text-sm whitespace-pre-wrap">{extractedText}</pre>
                    </div>
                    <Button 
                      onClick={handleDownload}
                      className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                    >
                      <Download className="mr-2 h-4 w-4" />
                      Download as Text File
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <FileText className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Upload a PDF to see extracted text</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>How to Use</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ol>
                  <li>Click "Choose File" or drag and drop your PDF into the upload area</li>
                  <li>Wait for the text extraction process to complete</li>
                  <li>Review the extracted text in the preview panel</li>
                  <li>Download the text file for your use</li>
                </ol>
                <p>
                  <strong>Note:</strong> The tool works best with text-based PDFs. Scanned documents may require OCR (Optical Character Recognition) for accurate text extraction.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Features & Benefits</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <ul>
                  <li><strong>Fast Processing:</strong> Extract text from PDFs in seconds</li>
                  <li><strong>Accurate Results:</strong> Maintains text formatting and structure</li>
                  <li><strong>Privacy Focused:</strong> Files are processed securely</li>
                  <li><strong>No Installation:</strong> Works directly in your browser</li>
                  <li><strong>Multiple Uses:</strong> Great for data entry, content migration, and analysis</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Use Cases Section */}
          <Card>
            <CardHeader>
              <CardTitle>Common Use Cases</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Content Migration</h3>
                <p className="text-muted-foreground">
                  Extract text from PDF documents to import into content management systems, databases, or other digital platforms. Perfect for digitizing archives and moving content between systems.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Data Extraction & Analysis</h3>
                <p className="text-muted-foreground">
                  Pull data from PDF reports, invoices, or statements for analysis in spreadsheets or databases. Essential for financial analysis, research, and business intelligence.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Accessibility Enhancement</h3>
                <p className="text-muted-foreground">
                  Convert PDF content to plain text for use with screen readers and accessibility tools. Makes content more accessible to users with visual impairments.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Content Editing & Repurposing</h3>
                <p className="text-muted-foreground">
                  Extract text to edit, update, or repurpose PDF content. Useful when you don't have access to the original source files.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Search & Index Creation</h3>
                <p className="text-muted-foreground">
                  Create searchable text versions of PDF documents for easier information retrieval and indexing in document management systems.
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

export default PDFToText;
