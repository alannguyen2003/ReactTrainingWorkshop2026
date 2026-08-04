import { cn } from "../../../lib/util";

export function FilterSection() {
    return (
        <section className="bg-beige py-8">
            <div
                className={cn("mx-auto flex w-[min(1240px,calc(100%-32px))] flex-col gap-4",
                    "md:flex-row md:items-center md:justify-between"
                )} >
                <div className="flex flex-wrap items-center gap-6">
                    <span className="flex items-center gap-3 text-xl">
                        <svg className="w-8 h-8" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="3" stroke="#000000" fill="none">
                            <line x1="50.69" y1="32" x2="56.32" y2="32"/><line x1="7.68" y1="32" x2="38.69" y2="32"/>
                            <line x1="26.54" y1="15.97" x2="56.32" y2="15.97"/><line x1="7.68" y1="15.97" x2="14.56" y2="15.97"/>
                            <line x1="35" y1="48.03" x2="56.32" y2="48.03"/>
                            <line x1="7.68" y1="48.03" x2="23" y2="48.03"/>
                            <circle cx="20.55" cy="15.66" r="6"/>
                            <circle cx="44.69" cy="32" r="6"/>
                            <circle cx="29" cy="48.03" r="6"/>
                        </svg>
                        Filter
                    </span>
                    <svg fill="#000000" className="w-8 h-8" id="Layer_1" data-name="Layer 1"
                        xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                        <path className="cls-1" d="M6.5,11A1.5,1.5,0,1,1,5,9.5,1.5,1.5,0,0,1,6.5,11ZM5,3.5A1.5,1.5,0,1,0,6.5,5,1.5,1.5,0,0,0,5,3.5ZM12.5,11A1.5,1.5,0,1,1,11,9.5,1.5,1.5,0,0,1,12.5,11ZM11,3.5A1.5,1.5,0,1,0,12.5,5,1.5,1.5,0,0,0,11,3.5Z"/>
                    </svg>
                    <svg fill="#000000" className="w-8 h-8" viewBox="0 0 32 32" id="icon" xmlns="http://www.w3.org/2000/svg">
                        <title>row</title>
                        <rect x="4" y="24" width="24" height="2"/>
                        <path d="M26,18H6V14H26v4m2,0V14a2,2,0,0,0-2-2H6a2,2,0,0,0-2,2v4a2,2,0,0,0,2,2H26a2,2,0,0,0,2-2Z"/>
                        <rect x="4" y="6" width="24" height="2"/>
                        <rect id="_Transparent_Rectangle_" data-name="&lt;Transparent Rectangle&gt;" className="cls-1" fill="none" width="32" height="32" transform="translate(32) rotate(90)"/>
                    </svg>
                    <span className="h-9 w-px bg-[#9f9f9f]"></span>
                    <span>Showing 1-16 of 32 results</span>
                </div>
                <div className="flex flex-wrap items-center gap-7">
                    <label className="flex items-center gap-4">
                        <span>Show</span>
                        <input name="number"
                            id="number"
                            type="number"
                            className="h-[55px] w-[55px] bg-white text-center text-xl text-muted"
                            placeholder="16" />
                    </label>
                    <label className="flex items-center gap-4">
                        <span>Sort by</span>
                        <select
                            className="h-[55px] w-[188px] bg-white px-7 text-xl text-muted">
                            <option>Default</option>
                        </select>
                    </label>
                </div>
            </div>
        </section>
    );
}