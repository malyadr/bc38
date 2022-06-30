export default {
    transform: {
        '.+\\.(css|scss|png|jpg|svg|webp)$': 'jest-transform-stub',
    },
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleNameMapper: {
        '\\.svg$': '<rootDir>/__mocks__/fileMock.ts',
    },
}
