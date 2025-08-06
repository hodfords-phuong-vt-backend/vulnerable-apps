// swift-tools-version:5.10

import PackageDescription

let package = Package(
    name: "swift",
    platforms: [
        .macOS(.v13) // hoặc tùy phiên bản bạn dùng
    ],
    dependencies: [
        // Vulnerable packages (with known CVEs)
        .package(url: "https://github.com/PerfectlySoft/Perfect-HTTPServer.git", from: "3.0.0"),
        .package(url: "https://github.com/SwiftyJSON/SwiftyJSON.git", from: "4.0.0"),
        .package(url: "https://github.com/Alamofire/Alamofire.git", from: "4.0.0"),
        .package(url: "https://github.com/daltoniam/Starscream.git", from: "3.1.1"),
    ],
    targets: [
        .executableTarget(
            name: "swift",
            dependencies: [
                .product(name: "PerfectHTTPServer", package: "Perfect-HTTPServer"),
                "SwiftyJSON",
                "Alamofire",
                "Starscream"
            ]
        )
    ]
)
