import React from 'react'
import InputButton from '../../components/SmallComponents/Button'

export default function Cart() {
    return (
        <section className='mb-10 '>
            <h2 className=' text-center mt-28 mb-10 font-bold text-2xl text-custom-primary'>Cart</h2>
            <div className="overflow-x-auto mx-auto max-w-screen-xl px-10 grid grid-cols-3 gap-8">
                <table className="table col-span-2">
                    {/* head */}

                    <tbody>
                        {/* row 1 */}
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h- w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">$300</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <select className="select  select-primary w-20 block max-w-xs">
                                    <option >1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </td>
                            <td>$400</td>
                            <th>
                                <button className="btn btn-square btn-outline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                        <tr>
                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">Hart Hagerty</div>
                                        <div className="text-sm opacity-50">$300</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                <select className="select  select-primary w-20 block max-w-xs">
                                    <option >1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </td>
                            <td>$400</td>
                            <th>
                                <button className="btn btn-square btn-outline">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </th>
                        </tr>
                    </tbody>
                    {/* foot */}

                </table>

                <div className='bg-[#f9fafb] p-4'>
                    <div className="overflow-x-auto grid">
                        <form action="">
                            <table className="table mb-3">
                                {/* head */}
                                <thead>
                                    <tr>
                                        <th className='text-xl'>Order summary
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* row 1 */}
                                    <tr>
                                        <td>Subtotal</td>
                                        <td>$454</td>
                                    </tr>
                                    {/* row 2 */}
                                    <tr>
                                        <td>Shipping estimate
                                        </td>
                                        <td>$5.00</td>
                                    </tr>
                                    <tr>
                                        <td>Tax estimate
                                        </td>
                                        <td>$5.00</td>
                                    </tr>
                                    <tr className='text-xl'>
                                        <td>Order total </td>
                                        <td>$112.32</td>
                                    </tr>
                                </tbody>
                            </table>
                            <InputButton text={'Order'} />
                        </form>
                    </div>
                </div>
            </div>

        </section>
    )
}