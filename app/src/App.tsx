import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {AppDispatch, RootState} from "./store/root.ts";
import {decrement, increment, setCount} from "./store/features/counter.ts";


const button = "rounded-md px-3 py-2 text-sm font-medium bg-gray-900 text-gray-300 hover:bg-gray-700 hover:text-white";

const navigation = [
    {name: 'Dashboard', href: '#', current: true},
    {name: 'Orders', href: '#', current: false},
    {name: 'New', href: '#', current: false},
]

const classNames = (...classes: string[]) => classes.filter(Boolean).join(' ');

const Nav = () => {
    return (
        <>
            <div className="min-h-full">
                <div className="bg-gray-800">
                    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                        <div className="flex h-16 items-center justify-between">
                            <div className="flex items-center">
                                <div className="shrink-0">
                                    <img
                                        alt="Your Company"
                                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                                        className="size-8"
                                    />
                                </div>
                                <div className="hidden md:block">
                                    <div className="ml-10 flex items-baseline space-x-4">
                                        {navigation.map((item) => (
                                            <a
                                                key={item.name}
                                                href={item.href}
                                                aria-current={item.current ? 'page' : undefined}
                                                className={classNames(
                                                    item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                                    'rounded-md px-3 py-2 text-sm font-medium',
                                                )}
                                            >
                                                {item.name}
                                            </a>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

const App = () => {

    const count = useSelector((state: RootState) => state.counter.value);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <>
            <Nav></Nav>

            <header className="bg-white shadow-sm">
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900">
                        Titel
                    </h1>
                </div>
            </header>
            <main>
                <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">

                    <h1>Count {count}</h1>

                    <div className="flex gap-2">

                    <button className={button} onClick={() => dispatch(decrement())}>
                        -
                    </button>
                    <button className={button} onClick={() => dispatch(increment())}>
                        +
                    </button>
                    <button className={button} onClick={() => dispatch(setCount(0))}>
                        Reset
                    </button>
                    </div>
                </div>
            </main>
        </>
    )
}

export default App
