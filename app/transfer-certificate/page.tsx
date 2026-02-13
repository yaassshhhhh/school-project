"use client";

import { useState, useEffect } from 'react';
import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { FileText, Grid, List, Download, Eye, ChevronLeft, ChevronRight, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { PageHeader } from "@/components/ui/page-header";



interface PDFFile {
    name: string;
    path: string;
    size: number;
}

export default function TransferCertificatePage() {
    const [files, setFiles] = useState<PDFFile[]>([]);
    const [loading, setLoading] = useState(true);
    const [viewMode, setViewMode] = useState<'grid' | 'row'>('grid');
    const [columns, setColumns] = useState<2 | 3 | 4>(4); // Default to 4 columns
    const [currentPage, setCurrentPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const itemsPerPage = 12;

    useEffect(() => {
        fetch('/api/pdfs')
            .then(res => res.json())
            .then(data => {
                setFiles(data.files || []);
                setLoading(false);
            })
            .catch(err => {
                console.error("Failed to fetch PDFs", err);
                setLoading(false);
            });
    }, []);

    // Filter files based on search
    const filteredFiles = files.filter(file =>
        file.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Pagination logic
    const totalPages = Math.ceil(filteredFiles.length / itemsPerPage);
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentFiles = filteredFiles.slice(startIndex, startIndex + itemsPerPage);

    const formatFileSize = (bytes: number) => {
        if (bytes === 0) return '0 Bytes';
        const k = 1024;
        const sizes = ['Bytes', 'KB', 'MB', 'GB'];
        const i = Math.floor(Math.log(bytes) / Math.log(k));
        return parseFloat((bytes / Math.pow(k, i)).toFixed(2)) + ' ' + sizes[i];
    };

    const handlePageChange = (newPage: number) => {
        if (newPage >= 1 && newPage <= totalPages) {
            setCurrentPage(newPage);
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    };

    // Calculate grid classes based on selected columns
    const getGridColsClass = () => {
        switch (columns) {
            case 2: return "grid-cols-1 sm:grid-cols-2";
            case 3: return "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
            case 4: default: return "grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4";
        }
    };

    return (
        <div className="bg-background min-h-screen pb-20">
            {/* Hero Section */}
            <PageHeader
                title="Transfer Certificates"
                description="View and download student transfer certificates."
                image="/images/campus_library.webp" // Using a generic image or relevant one
            />

            <Container>
                {/* Controls Header */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-8 bg-card p-4 rounded-lg shadow-sm border border-border/50">
                    <div className="relative w-full md:w-72">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                        <input
                            type="text"
                            placeholder="Search student name..."
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1); // Reset to first page on search
                            }}
                            className="w-full pl-9 pr-4 py-2 rounded-lg border border-input bg-background focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all duration-200"
                        />
                    </div>

                    <div className="flex flex-wrap items-center gap-4 justify-end">
                        {/* View Toggle */}
                        <div className="flex items-center gap-2">
                            <span className="text-sm text-muted-foreground hidden sm:inline-block">Layout:</span>
                            <div className="flex bg-muted rounded-lg p-1 border border-border/50">
                                <Button
                                    variant={viewMode === 'grid' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('grid')}
                                    className="h-8 px-2 gap-1 rounded-md"
                                >
                                    <Grid className="h-4 w-4" /> <span className="hidden sm:inline">Grid</span>
                                </Button>
                                <Button
                                    variant={viewMode === 'row' ? 'secondary' : 'ghost'}
                                    size="sm"
                                    onClick={() => setViewMode('row')}
                                    className="h-8 px-2 gap-1 rounded-md"
                                >
                                    <List className="h-4 w-4" /> <span className="hidden sm:inline">List</span>
                                </Button>
                            </div>
                        </div>

                        {/* Column Selector - Only show in Grid Mode */}
                        {viewMode === 'grid' && (
                            <div className="flex items-center gap-2 border-l border-border pl-4">
                                <span className="text-sm text-muted-foreground hidden sm:inline-block">Columns:</span>
                                <div className="flex bg-muted rounded-lg p-1 border border-border/50">
                                    {[2, 3, 4].map((col) => (
                                        <button
                                            key={col}
                                            onClick={() => setColumns(col as 2 | 3 | 4)}
                                            className={`h-8 w-8 flex items-center justify-center rounded-md text-sm font-medium transition-all ${columns === col
                                                ? "bg-white text-primary shadow-sm"
                                                : "text-muted-foreground hover:bg-secondary/10"
                                                }`}
                                            title={`${col} Columns`}
                                        >
                                            {col}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {loading ? (
                    <div className="text-center py-20">
                        <div className="animate-spin h-8 w-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
                        <p className="text-muted-foreground">Loading certificates...</p>
                    </div>
                ) : filteredFiles.length === 0 ? (
                    <div className="text-center py-20 bg-muted/30 rounded-lg">
                        <FileText className="h-12 w-12 text-muted-foreground mx-auto mb-4 opacity-50" />
                        <p className="text-lg text-muted-foreground">No certificates found matching your search.</p>
                    </div>
                ) : (
                    <>
                        {/* Grid View */}
                        {viewMode === 'grid' && (
                            <div className={`grid gap-6 ${getGridColsClass()}`}>
                                {currentFiles.map((file, index) => (
                                    <motion.div
                                        key={file.name}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        transition={{ delay: index * 0.05 }}
                                        className="group bg-card hover:shadow-xl transition-all duration-300 rounded-lg border border-border/50 overflow-hidden flex flex-col"
                                    >
                                        <div className="bg-muted/30 flex justify-center items-center overflow-hidden relative border-b border-border cursor-pointer group-hover:bg-muted/50 transition-colors"
                                            style={{ height: columns === 2 ? '400px' : columns === 3 ? '300px' : '250px' }}
                                            onClick={() => window.open(file.path, '_blank')}>
                                            <FileText className="h-16 w-16 text-primary/40 group-hover:scale-110 transition-transform duration-300" strokeWidth={1.5} />
                                        </div>
                                        <div className="p-4 flex-1 flex flex-col">
                                            <h3 className="font-semibold text-foreground mb-1 line-clamp-2 min-h-[3rem]" title={file.name}>
                                                {file.name.replace('.pdf', '')}
                                            </h3>
                                            <p className="text-xs text-muted-foreground mb-4">{formatFileSize(file.size)}</p>
                                            <div className="mt-auto flex gap-2">
                                                <Button
                                                    className="flex-1 gap-2 bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                                                    size="sm"
                                                    onClick={() => window.open(file.path, '_blank')}
                                                >
                                                    <Eye className="h-4 w-4" /> View
                                                </Button>
                                                <a href={file.path} download={file.name} className="flex-1">
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="w-full gap-2 border-primary/20 text-primary hover:bg-primary hover:text-white"
                                                    >
                                                        <Download className="h-4 w-4" /> Download
                                                    </Button>
                                                </a>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        )}

                        {/* Row/List View */}
                        {viewMode === 'row' && (
                            <div className="bg-card rounded-lg border border-border/50 overflow-hidden shadow-sm">
                                <div className="divide-y divide-border">
                                    {currentFiles.map((file, index) => (
                                        <motion.div
                                            key={file.name}
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: index * 0.03 }}
                                            className="p-4 flex flex-col sm:flex-row sm:items-center justify-between hover:bg-muted/50 transition-colors gap-4"
                                        >
                                            <div className="flex items-center gap-4">
                                                <div className="h-12 w-12 bg-muted/40 border border-border rounded overflow-hidden flex items-center justify-center shrink-0">
                                                    <FileText className="h-6 w-6 text-primary/60" strokeWidth={1.5} />
                                                </div>
                                                <div>
                                                    <h3 className="font-medium text-foreground">{file.name.replace('.pdf', '')}</h3>
                                                    <p className="text-xs text-muted-foreground">{formatFileSize(file.size)}</p>
                                                </div>
                                            </div>
                                            <div className="flex items-center gap-2 shrink-0">
                                                <Button
                                                    variant="ghost"
                                                    size="sm"
                                                    className="gap-2 text-foreground/80 hover:text-primary"
                                                    onClick={() => window.open(file.path, '_blank')}
                                                >
                                                    <Eye className="h-4 w-4" /> View
                                                </Button>
                                                <a href={file.path} download={file.name}>
                                                    <Button
                                                        variant="outline"
                                                        size="sm"
                                                        className="gap-2 border-primary/20 text-primary hover:bg-primary hover:text-white"
                                                    >
                                                        <Download className="h-4 w-4" /> Download
                                                    </Button>
                                                </a>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="flex justify-center items-center mt-12 gap-2">
                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(currentPage - 1)}
                                    disabled={currentPage === 1}
                                    className="h-9 w-9 p-0"
                                >
                                    <ChevronLeft className="h-4 w-4" />
                                </Button>

                                <div className="flex items-center gap-1">
                                    {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                                        // Show first, last, current, and surrounding pages
                                        (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) ? (
                                            <Button
                                                key={page}
                                                variant={currentPage === page ? "primary" : "ghost"}
                                                size="sm"
                                                onClick={() => handlePageChange(page)}
                                                className={`h-9 w-9 p-0 ${currentPage === page ? 'bg-secondary hover:bg-secondary/90' : ''}`}
                                            >
                                                {page}
                                            </Button>
                                        ) : (
                                            page === currentPage - 2 || page === currentPage + 2 ? (
                                                <span key={page} className="px-1 text-muted-foreground">...</span>
                                            ) : null
                                        )
                                    ))}
                                </div>

                                <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => handlePageChange(currentPage + 1)}
                                    disabled={currentPage === totalPages}
                                    className="h-9 w-9 p-0"
                                >
                                    <ChevronRight className="h-4 w-4" />
                                </Button>
                            </div>
                        )}
                    </>
                )}
            </Container>
        </div>
    );
}
