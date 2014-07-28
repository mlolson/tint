name := """tint"""

version := "1.0-SNAPSHOT"

lazy val root = (project in file(".")).enablePlugins(PlayScala)

scalaVersion := "2.11.1"

libraryDependencies ++= Seq(
  jdbc,
  anorm,
  cache,
  ws,
  "com.google.api-client" % "google-api-client" % "1.18.0-rc",
  "com.google.apis" % "google-api-services-youtube" % "v3-rev111-1.18.0-rc",
  "com.google.apis" % "google-api-services-oauth2" % "v2-rev74-1.18.0-rc",
  "com.google.http-client" % "google-http-client-jackson2" % "1.15.0-rc"
)