import type { Metadata } from 'next';
import Link from 'next/link';
import DocumentViewer from '@/components/documents/DocumentViewer';

export const metadata: Metadata = {
  title: 'City Charter | Megan\'s Information Hub',
  description: 'Access Titusville\'s City Charter',
};

export default function CityCharterPage() {
  // Mock document data - in a real implementation, this would be fetched from a database or API
  const documentData = {
    title: "Titusville City Charter",
    pages: [
      {
        content: `
# City of Titusville Charter

## Overview

The Charter of the City of Titusville, Florida serves as the city's constitution, establishing the framework for municipal governance. This document defines the powers, structure, and responsibilities of the city government, as well as the rights and responsibilities of its citizens.

The Charter was originally adopted when Titusville was incorporated and has been amended over time through voter approval. It takes precedence over city ordinances and provides the foundation for all municipal operations.

## How to Use This Document

This digital version of the Titusville City Charter allows you to search, browse, and reference the city's foundational document. Use the search function to find specific topics, or navigate through the sections using the page controls.

For official legal purposes, please refer to the certified copy maintained by the City Clerk's office.
        `
      },
      {
        content: `
## Table of Contents

### ARTICLE I - INCORPORATION AND POWERS

- Section 1.01. Incorporation
- Section 1.02. Powers of the City
- Section 1.03. Construction
- Section 1.04. Intergovernmental Relations

### ARTICLE II - CITY COUNCIL

- Section 2.01. Composition, Eligibility, Election, and Terms
- Section 2.02. Compensation and Expenses
- Section 2.03. Mayor
- Section 2.04. Powers and Duties
- Section 2.05. Prohibitions
- Section 2.06. Vacancies; Forfeiture of Office; Filling of Vacancies
- Section 2.07. Judge of Qualifications
- Section 2.08. City Clerk
- Section 2.09. Investigations
- Section 2.10. Independent Audit
- Section 2.11. Procedure
- Section 2.12. Action Requiring an Ordinance
- Section 2.13. Ordinances in General
- Section 2.14. Emergency Ordinances
- Section 2.15. Codes of Technical Regulations
- Section 2.16. Authentication and Recording; Codification; Printing
        `
      },
      {
        content: `
### ARTICLE III - CITY MANAGER

- Section 3.01. Appointment; Qualifications; Compensation
- Section 3.02. Powers and Duties of the City Manager
- Section 3.03. Acting City Manager
- Section 3.04. Removal

### ARTICLE IV - DEPARTMENTS, OFFICES, AND AGENCIES

- Section 4.01. General Provisions
- Section 4.02. Personnel System
- Section 4.03. City Attorney
- Section 4.04. Planning
- Section 4.05. Finance

### ARTICLE V - FINANCIAL PROCEDURES

- Section 5.01. Fiscal Year
- Section 5.02. Submission of Budget and Budget Message
- Section 5.03. Budget Message
- Section 5.04. Budget
- Section 5.05. City Council Action on Budget
- Section 5.06. Appropriation and Revenue Ordinances
- Section 5.07. Amendments After Adoption
- Section 5.08. Lapse of Appropriations
- Section 5.09. Administration of Budget
- Section 5.10. Overspending of Appropriations Prohibited
- Section 5.11. Capital Program
- Section 5.12. City Council Action on Capital Program
- Section 5.13. Public Records
- Section 5.14. Taxation
        `
      }
    ]
  };

  return (
    <div className="container mx-auto px-6 py-12">
      <div className="flex items-center mb-8">
        <Link href="/documents" className="text-blue-600 hover:text-blue-800 mr-2">
          <svg className="w-5 h-5 inline" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
          </svg>
          Back to Documents
        </Link>
        <h1 className="text-3xl font-bold text-gray-800 ml-2">City Charter</h1>
      </div>
      
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <p className="text-gray-700 mb-6">
          The Titusville City Charter serves as the city's constitution, establishing the framework for municipal governance. 
          This document defines the powers, structure, and responsibilities of the city government.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Official Source</h3>
            <p className="text-gray-700 mb-2">
              The official Titusville City Charter is maintained by the City Clerk's office and is available on the city website.
            </p>
            <a 
              href="https://www.titusville.com/government/city-charter" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-blue-600 hover:text-blue-800 flex items-center"
            >
              View Official Charter on City Website
              <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
          
          <div className="bg-blue-50 p-4 rounded-lg">
            <h3 className="font-medium text-gray-800 mb-2">Last Updated</h3>
            <p className="text-gray-700">
              This document was last updated on March 10, 2025. Please refer to the official source for the most current version.
            </p>
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <DocumentViewer document={documentData} title="Titusville City Charter" />
      </div>
    </div>
  );
}
