export const memoize = <ArgsType extends unknown[], ResultType>(
    fn: (...args: ArgsType) => ResultType,
) => {
    const cache: Record<string, ResultType> = {}

    return (...args: ArgsType) => {
        const key = JSON.stringify(args)

        if (cache[key]) {
            return cache[key]
        }

        const asyncFn = fn.call(undefined, ...args)
        cache[key] = asyncFn
        return asyncFn
    }
}
