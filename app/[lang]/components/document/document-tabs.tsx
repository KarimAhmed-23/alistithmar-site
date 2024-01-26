"use client";
import { Locale } from '@/i18n.config';
import { ReportTab } from '@/types/documents-data.moduels';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Alert from 'react-bootstrap/Alert';


interface DocumentTabsProps {
	lang: Locale;
}
function DocumentTabs({ lang }: DocumentTabsProps) {
	const [activeTab, setActiveTab] = useState<string>('');
	const [documents, setDocuments] = useState<ReportTab[]>([]);
	const [error, setError] = useState<string>('');

	const handleTabClick = (target: string) => {
		setActiveTab(target);
	};
	useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_INVESTMENT_URL}/api/pages?populate=deep&locale=${lang}`);
        const data = await response.json();
        const reportTabs = data.data[0].attributes.Reports.ReportTab;

        if (reportTabs.length > 0) {
          // Set the initial activeTab to the first document's TabTitle
          setActiveTab(reportTabs[0].TabTitle);
        }

        setDocuments(reportTabs);
      } catch (error) {
        setError('An error occurred while fetching data');
      }
    };

    fetchData();
  }, [lang]);
	return (
		<>
			{error ? (
				<Alert  variant='danger' className='text-center h-100'>
				{error}
			</Alert>
			) : (
				<div className="document-tabs tabs-area">
					<div className="tabs-btn-list">
						{documents.map((document, index) => (
							<button
								key={index}
								type="button"
								role="tab"
								className={`tab-btn ${activeTab === document.TabTitle ? 'active' : ''}`}
								onClick={() => handleTabClick(document.TabTitle)}
							>
								{document.TabTitle}
							</button>
						))}
					</div>
					<div className="tabs-content-list">
						{documents.map((document, index) => (
							<div
								key={index}
								className={`tab-content ${activeTab === document.TabTitle ? 'active' : ''}`}
							>
								<div className="docs-row">
									<div className="row row-cols-md-2">
										{document.ReportFile.map((file, fileIndex) => (
											<div key={fileIndex} className="doc-wrap">
												<div className="doc-box">
													<div className="doc-info">
														<svg
															xmlns="http://www.w3.org/2000/svg"
															height="16"
															width="16"
															viewBox="0 0 512 512">
															<path d="M0 64C0 28.7 28.7 0 64 0L224 0l0 128c0 17.7 14.3 32 32 32l128 0 0 144-208 0c-35.3 0-64 28.7-64 64l0 144-48 0c-35.3 0-64-28.7-64-64L0 64zm384 64l-128 0L256 0 384 128zM176 352l32 0c30.9 0 56 25.1 56 56s-25.1 56-56 56l-16 0 0 32c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-48 0-80c0-8.8 7.2-16 16-16zm32 80c13.3 0 24-10.7 24-24s-10.7-24-24-24l-16 0 0 48 16 0zm96-80l32 0c26.5 0 48 21.5 48 48l0 64c0 26.5-21.5 48-48 48l-32 0c-8.8 0-16-7.2-16-16l0-128c0-8.8 7.2-16 16-16zm32 128c8.8 0 16-7.2 16-16l0-64c0-8.8-7.2-16-16-16l-16 0 0 96 16 0zm80-112c0-8.8 7.2-16 16-16l48 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 32 32 0c8.8 0 16 7.2 16 16s-7.2 16-16 16l-32 0 0 48c0 8.8-7.2 16-16 16s-16-7.2-16-16l0-64 0-64z" />
														</svg>
														<span className="doc-title">{file.FileName}</span>
													</div>
													<Link
														href={file.asset.data?.attributes.url || ''} 
														type="button"
														target='_blank'
														className="download-btn"
														role="downlaod"
														title="downlaod">
														<svg
															width="24"
															height="24"
															viewBox="0 0 24 24"
															xmlns="http://www.w3.org/2000/svg">
															<g clip-path="url(#clip0_1_889)">
																<path d="M5 20H19V18H5V20ZM19 9H15V3H9V9H5L12 16L19 9Z" />
															</g>
															<defs>
																<clipPath id="clip0_1_889">
																	<rect width="24" height="24" />
																</clipPath>
															</defs>
														</svg>
													</Link>
												</div>
											</div>
										))}
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			)}
		</>
	);
}

export default DocumentTabs;
