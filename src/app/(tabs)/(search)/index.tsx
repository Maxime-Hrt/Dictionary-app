import Content from "@/components/ContentView";
import ErrorView from "@/components/ErrorView";
import LoadingView from "@/components/LoadingView";
import WelcomeView from "@/components/WelcomeView";
import SearchLayout from "@/components/layout/SearchLayout";
import { extractWiktionaryPage } from "@/lib/wiktionary";
import { WiktionaryPage } from "@/type/wiktionary";
import { useColorScheme } from "nativewind";
import { useState } from "react";

export default function Index() {
    const { colorScheme } = useColorScheme()
    
    const [input, setInput] = useState<string>("")
    const [data, setData] = useState<WiktionaryPage | null>(null)
    const [error, setError] = useState<string | null>(null)
    const [loading, setLoading] = useState<boolean>(false)
    
    const handleSearch = async (input: string) => {
        if (input.length === 0) return
        
        try {
            setLoading(true)
            const response = await extractWiktionaryPage(input)
            setData(response)
            setInput(input)
        } catch (error: any) {
            setError(error.message)
            setData(null)
        } finally {
            setLoading(false)
        }
    }

    return (
        <SearchLayout onSearch={handleSearch}>
            { !data && !error ? (
                <WelcomeView onSearch={handleSearch} />
            ) : (
                <>
                    { loading ? (
                        <LoadingView colorScheme={colorScheme as "light" | "dark"} />
                    ) : (
                        <>
                            { data ? (
                                <Content 
                                    input={input}
                                    data={data} 
                                />
                            ) : (
                                <ErrorView error={error} />
                            )}
                        </>
                    )}
                </>
            )}
        </SearchLayout>
    )
}