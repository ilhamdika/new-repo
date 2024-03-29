import Layout from "@/Layouts/User/Index"

export default function Index(){
    return(
        <Layout>
            <div className="">
                <div className="w-full mx-auto px-4 mobile:pt-20">
                    <img className="w-full h-auto laptop:h-23" src="/images/her.jpg" alt="Main Image" />
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 laptop:px-8 laptop:py-5">

                    <div className="grid grid-cols-1 mobile:grid-cols-2 tablet:grid-cols-4 laptop:grid-cols-4 gap-4">
                        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-5">
                            <img src="/images/goo.jpg" alt="Gambar 1" className="w-full h-auto" />
                        </div>

                        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-5">
                            <img src="/images/fb.png" alt="Gambar 2" className="w-full h-auto" />
                        </div>

                        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-5">
                            <img src="/images/seo.jpg" alt="Gambar 3" className="w-full h-auto " />
                        </div>

                        <div className="flex items-center justify-center bg-white rounded-lg shadow-lg p-5">
                            <img src="/images/train.jpg" alt="Gambar 4" className="w-full h-auto" />
                        </div>
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 laptop:px-8 laptop:py-5">
                    <div className="laptop:flex mobile:flex-col py-4">
                        <div className="laptop:w-1/3 mobile:w-full">
                            <div className="flex items-center justify-center laptop:p-5">
                                <img src="/images/goo.jpg" alt="Gambar 1" className="w-full h-auto" />
                            </div>
                        </div>

                        <div className="laptop:w-2/3 mobile:w-full">
                            <div className="p-5 ">
                                <div className="items-center justify-center p-5">
                                    <h1 className="text-3xl font-light laptop:my-5">Google AdWords</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum unde aliquid praesentium ducimus fugiat nisi reiciendis quidem. Magnam placeat enim deleniti? Voluptatum, voluptate sed. Vel nostrum modi ea id.</p>
                                </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Read More</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="laptop:flex mobile:py-4">
                        <div className="laptop:w-2/3 mobile:w-full">
                            <div className="p-5 ">
                                <div className="items-center justify-center p-5">
                                    <h1 className="text-3xl font-light laptop:my-5">Facebook Ads</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum unde aliquid praesentium ducimus fugiat nisi reiciendis quidem. Magnam placeat enim deleniti? Voluptatum, voluptate sed. Vel nostrum modi ea id.</p>
                                </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Read More</button>
                                    </div>
                            </div>
                        </div>
                        <div className="laptop:w-1/3 mobile:w-full">
                            <div className="flex items-center justify-center laptop:h-auto laptop:p-5">
                                <img src="/images/fb.png" alt="Gambar 2" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                    <div className="laptop:flex mobile:py-4">
                        <div className="laptop:w-1/3 mobile:w-full">
                            <div className="flex items-center justify-center laptop:p-5">
                                <img src="/images/seo.jpg" alt="Gambar 3" className="w-full h-auto " />
                            </div>
                        </div>

                        <div className="laptop:w-2/3 mobile:w-full">
                            <div className="p-5 ">
                                <div className="items-center justify-center p-5">
                                    <h1 className="text-3xl font-light laptop:my-5">SEO</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum unde aliquid praesentium ducimus fugiat nisi reiciendis quidem. Magnam placeat enim deleniti? Voluptatum, voluptate sed. Vel nostrum modi ea id.</p>
                                </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Read More</button>
                                    </div>
                            </div>
                        </div>
                    </div>
                    <div className="laptop:flex mobile:py-4">
                        <div className="laptop:w-2/3 mobile:w-full">
                            <div className="p-5 ">
                                <div className="items-center justify-center p-5">
                                    <h1 className="text-3xl font-light laptop:my-5">Training</h1>
                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam eum unde aliquid praesentium ducimus fugiat nisi reiciendis quidem. Magnam placeat enim deleniti? Voluptatum, voluptate sed. Vel nostrum modi ea id.</p>
                                </div>
                                    <div className="flex justify-end">
                                        <button className="bg-blue-500 text-white px-3 py-1 rounded-lg">Read More</button>
                                    </div>
                            </div>
                        </div>
                        <div className="laptop:w-1/3 mobile:w-full">
                            <div className="flex items-center justify-center laptop:h-auto laptop:p-5">
                                <img src="/images/train.jpg" alt="Gambar 4" className="w-full h-auto" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}