const gulp = require("gulp");
const ejs = require("gulp-ejs");
const rename = require("gulp-rename");
const plumber = require("gulp-plumber");
const browserSync = require("browser-sync").create();
const concat = require("gulp-concat");

// Определяем порядок подключения CSS-файлов
const cssFilesOrder = [
  "src/styles/reset.css",
  "src/styles/normalize.css",
  "src/styles/colors.css",
  "src/styles/fonts.css",
  "src/styles/main.css",
  "src/styles/icons.css",
  "src/styles/common.css",
  "src/styles/form.css",
  "src/styles/vars.css",
  "src/styles/components/*.css",
  "src/styles/templates/*.css",
  "src/styles/pages/*.css",
];

function copyCSS() {
  return gulp
    .src(cssFilesOrder)
    .pipe(concat("bundle.css")) // Объединяем в один файл
    .pipe(gulp.dest("dist/css"))
    .pipe(browserSync.stream());
}

// Компиляция EJS в HTML
function compileEJS() {
  return gulp
    .src("src/pages/*.ejs")
    .pipe(plumber())
    .pipe(ejs({}, {}, { ext: ".html" }))
    .pipe(rename({ extname: ".html" }))
    .pipe(gulp.dest("dist"))
    .pipe(browserSync.stream());
}

// Запуск сервера с автообновлением
function serve() {
  browserSync.init({
    server: {
      baseDir: "./dist",
    },
  });

  // Следим за изменениями в EJS и CSS
  gulp.watch("src/**/*.ejs", compileEJS);
  gulp.watch("src/**/*.css", copyCSS);
  gulp.watch(["dist/*.html", "dist/css/*.css"]).on("change", browserSync.reload);
}

// Копирование CSS (опционально)
// function copyCSS() {
//   return gulp
//     .src('src/styles/*.css')
//     .pipe(gulp.dest('dist/styles'))
//     .pipe(browserSync.stream())
// }

// Основная задача
// exports.default = gulp.series(gulp.parallel(compileEJS, copyCSS), serve)
exports.default = gulp.series(gulp.parallel(compileEJS, copyCSS), serve);
