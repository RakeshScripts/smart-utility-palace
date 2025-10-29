import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Calculator } from "lucide-react";

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState<string>("500000");
  const [interestRate, setInterestRate] = useState<string>("8.5");
  const [tenure, setTenure] = useState<string>("20");
  const [emi, setEmi] = useState<number | null>(null);
  const [totalAmount, setTotalAmount] = useState<number | null>(null);
  const [totalInterest, setTotalInterest] = useState<number | null>(null);

  const calculateEMI = () => {
    const principal = parseFloat(loanAmount);
    const rate = parseFloat(interestRate) / 12 / 100;
    const time = parseFloat(tenure) * 12;

    if (principal > 0 && rate > 0 && time > 0) {
      const emiValue = (principal * rate * Math.pow(1 + rate, time)) / (Math.pow(1 + rate, time) - 1);
      const totalPayment = emiValue * time;
      const totalInterestPayment = totalPayment - principal;

      setEmi(Math.round(emiValue));
      setTotalAmount(Math.round(totalPayment));
      setTotalInterest(Math.round(totalInterestPayment));
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl">
          {/* Page Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-2xl mb-4">
              <Calculator className="h-8 w-8 text-white" />
            </div>
            <h1 className="text-4xl font-bold mb-4">EMI Calculator</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Calculate your Equated Monthly Installment (EMI) for home loans, car loans, or personal loans with our accurate calculator.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Calculator Card */}
            <Card>
              <CardHeader>
                <CardTitle>Loan Details</CardTitle>
                <CardDescription>Enter your loan information to calculate EMI</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="loanAmount">Loan Amount (₹)</Label>
                  <Input
                    id="loanAmount"
                    type="number"
                    value={loanAmount}
                    onChange={(e) => setLoanAmount(e.target.value)}
                    placeholder="500000"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="interestRate">Interest Rate (% per annum)</Label>
                  <Input
                    id="interestRate"
                    type="number"
                    step="0.1"
                    value={interestRate}
                    onChange={(e) => setInterestRate(e.target.value)}
                    placeholder="8.5"
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="tenure">Loan Tenure (Years)</Label>
                  <Input
                    id="tenure"
                    type="number"
                    value={tenure}
                    onChange={(e) => setTenure(e.target.value)}
                    placeholder="20"
                  />
                </div>

                <Button 
                  onClick={calculateEMI} 
                  className="w-full bg-gradient-to-r from-primary to-accent hover:opacity-90"
                >
                  Calculate EMI
                </Button>
              </CardContent>
            </Card>

            {/* Results Card */}
            <Card>
              <CardHeader>
                <CardTitle>EMI Breakdown</CardTitle>
                <CardDescription>Your monthly payment details</CardDescription>
              </CardHeader>
              <CardContent>
                {emi !== null ? (
                  <div className="space-y-6">
                    <div className="p-6 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-2">Monthly EMI</p>
                      <p className="text-4xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                        {formatCurrency(emi)}
                      </p>
                    </div>
                    
                    <div className="space-y-4">
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <span className="text-muted-foreground">Principal Amount</span>
                        <span className="font-semibold">{formatCurrency(parseFloat(loanAmount))}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-muted rounded-lg">
                        <span className="text-muted-foreground">Total Interest</span>
                        <span className="font-semibold">{formatCurrency(totalInterest!)}</span>
                      </div>
                      
                      <div className="flex justify-between items-center p-4 bg-gradient-to-r from-primary/10 to-accent/10 rounded-lg">
                        <span className="font-medium">Total Amount Payable</span>
                        <span className="font-bold text-lg">{formatCurrency(totalAmount!)}</span>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="text-center py-12 text-muted-foreground">
                    <Calculator className="h-12 w-12 mx-auto mb-4 opacity-50" />
                    <p>Enter loan details and click Calculate to see results</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          {/* Information Section */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card>
              <CardHeader>
                <CardTitle>What is EMI?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  EMI stands for Equated Monthly Installment. It is a fixed payment amount made by a borrower to a lender at a specified date each calendar month. EMIs are used to pay off both interest and principal each month so that over a specified number of years, the loan is fully paid off.
                </p>
                <p>
                  The EMI amount consists of two components:
                </p>
                <ul>
                  <li><strong>Principal Component:</strong> The portion that goes towards repaying the loan amount</li>
                  <li><strong>Interest Component:</strong> The cost of borrowing the money</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>How is EMI Calculated?</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-sm max-w-none">
                <p>
                  The EMI calculation formula is:
                </p>
                <p className="bg-muted p-4 rounded-lg font-mono text-sm">
                  EMI = [P × R × (1+R)^N] / [(1+R)^N-1]
                </p>
                <p>Where:</p>
                <ul>
                  <li><strong>P</strong> = Principal loan amount</li>
                  <li><strong>R</strong> = Monthly interest rate (Annual rate / 12 / 100)</li>
                  <li><strong>N</strong> = Loan tenure in months</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* FAQ Section */}
          <Card>
            <CardHeader>
              <CardTitle>Frequently Asked Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div>
                <h3 className="font-semibold mb-2">Can I prepay my loan to reduce EMI burden?</h3>
                <p className="text-muted-foreground">
                  Yes, most lenders allow prepayment of loans. Making prepayments can significantly reduce your total interest burden and loan tenure. However, some lenders may charge prepayment penalties, so check your loan agreement.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Does EMI include both principal and interest?</h3>
                <p className="text-muted-foreground">
                  Yes, each EMI payment includes both principal and interest components. In the initial years, a larger portion goes towards interest. As you progress through the loan tenure, the principal component increases while the interest component decreases.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">What happens if I miss an EMI payment?</h3>
                <p className="text-muted-foreground">
                  Missing an EMI payment can result in late payment charges, negatively impact your credit score, and may lead to legal action by the lender. It's important to maintain a good payment history for future creditworthiness.
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold mb-2">Can I reduce my EMI amount?</h3>
                <p className="text-muted-foreground">
                  You can reduce your EMI by extending the loan tenure, making a larger down payment, or negotiating a lower interest rate with your lender. However, extending tenure may increase total interest paid.
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

export default EMICalculator;
