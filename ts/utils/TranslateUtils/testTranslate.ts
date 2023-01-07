import TranslateUtils from './'

const TEXT = 'Cats rule the world'
const TRANSLATION = 'Кошки правят миром'

async function testCache() {
    try {
        const timer1 = '1st request (NO CACHE)'
        console.time(timer1)
        const res1 = await TranslateUtils.translate(TEXT, 'ru')
        console.timeEnd(timer1)

        const timer2 = '2nd request (FROM CACHE)'
        console.time(timer2)
        const res2 = await TranslateUtils.translate(TEXT, 'ru')
        console.timeEnd(timer2)

        console.assert(res1 === res2)
        console.assert(res1 === TRANSLATION)
        console.log('OK')
    } catch (error) {
        console.log(error)
    }
}

async function testWrongTargetLanguage() {
    try {
        await TranslateUtils.translate(TEXT, 'abc')
    } catch (error) {
        console.log(`Error: ${(error as Error).message}`)
        console.log('OK')
    }
}

async function testWithSourceLanguage() {
    try {
        const res = await TranslateUtils.translate(TEXT, 'ru', 'en')
        console.assert(res === TRANSLATION)
        console.log('OK')
    } catch (error) {
        console.log(error)
    }
}

async function test() {
    console.log('=========== Test cache ===========')
    await testCache()

    console.log('=== Test with source language ====')
    await testWithSourceLanguage()

    console.log('=== Test wrong target language ===')
    await testWrongTargetLanguage()
}

test()