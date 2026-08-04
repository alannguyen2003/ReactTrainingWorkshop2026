import { useState } from "react";
import { cn } from "../../../lib/util";
import { ProductInformationType } from "../types/ProductInformation.types";

export function ProductAdditionalInformationSection({
    tabs,
    detailImages
}: Readonly<ProductInformationType>) {
    const [activeTab, setActiveTab] = useState<string>(tabs.find((item) => item.active)?.key ?? tabs[0]?.key ?? "");
    const currentTab = tabs.find((item) => item.key === activeTab);
    return (
        <section className="border-y border-line py-12">
            <div className="mx-auto w-[min(1026px,calc(100%-32px))]">
                <div className="mb-9 flex flex-wrap justify-center gap-14 text-2xl">
                    <button className={cn("", activeTab === "description" ? "font-medium" : "text-muted")}
                        onClick={() => setActiveTab("description")}>Description</button>
                    <button className={cn("", activeTab === "additional-information" ? "font-medium" : "text-muted")}
                        onClick={() => setActiveTab("additional-information")}>Additional Information</button>
                    <button className={cn("", activeTab === "reviews" ? "font-medium" : "text-muted")}
                        onClick={() => setActiveTab("reviews")}>Reviews</button>
                </div>
                {currentTab?.content.map((item, index) => (
                    <p key={index + 1} className="mb-7 text-justify text-muted">
                        {item}
                    </p>
                ))}
                <div className="grid gap-7 md:grid-cols-2">
                    {detailImages !== null && detailImages?.map((item,index) => (
                        <img
                            key={index + 1}
                            className="h-[348px] w-full rounded-[10px] bg-beige object-cover"
                            src={item}
                            alt=""
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}