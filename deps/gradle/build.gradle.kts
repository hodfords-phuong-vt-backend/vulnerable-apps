plugins {
    kotlin("jvm") version "1.9.21"
    application
}

repositories {
    mavenCentral()
}

dependencies {
    // RCE qua deserialization
    implementation("com.fasterxml.jackson.core:jackson-databind:2.9.9") // CVE-2019-12384

    // Path traversal
    implementation("commons-io:commons-io:2.4") // CVE-2021-29425

    // Unsafe YAML loading
    implementation("org.yaml:snakeyaml:1.19") // CVE-2017-18640

    // Groovy class loader RCE
    implementation("org.codehaus.groovy:groovy:2.4.3") // CVE-2016-6814
}

application {
    mainClass.set("MainKt")
}