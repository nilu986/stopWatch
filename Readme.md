# Eject -->

Note: this is a one-way operation. Once you eject, you can’t go back!

If you aren’t satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

# Babel -->

React uses JSX syntax to make writing react more familiar to we the programmers. However, the browsers do not understand JSX. Therefore babel is required to convert your JSX into javascript which is then manipulated by ReactDom and then input into your DOM for the browsers to understand.

# Webpack -->

Webpack doesn't just build Javascript files, even though you require() from your source Javascript. Webpack can also write static assets to disk. It can copy files from your source directory and put them in a temporary output directory.
