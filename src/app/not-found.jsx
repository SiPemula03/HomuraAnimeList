"use client"

import { FileSearch } from "@phosphor-icons/react"
import { useRouter } from "next/navigation"

const notFound = () => {
    const router = useRouter()
    
    return (
        <div className="min-h-screen max-w-xl mx-auto flex justify-center items-center">
            <div className="flex justify-center items-center gap-4 flex-col">
                <FileSearch size={44} className="text-color-cream"/>
                <h3 className="text-color-cream text-4xl font-bold">HALAMAN TIDAK DITEMUKAN</h3>
                <button onClick={() => router.back()} className="text-color-brown hover:text-color-orange transition-all underline">
                Kembali
                </button>
            </div>
        </div>
    )
}

export default notFound