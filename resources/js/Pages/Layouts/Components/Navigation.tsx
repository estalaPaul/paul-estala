export default function Navigation() {
    const navItems = [
        { title: 'Projects', path: '/projects' }
    ]

    return (
        <nav>
            <div className="flex">
                {navItems.map(project => (
                    <a key={project.path} href={project.path}>{project.title}</a>
                ))}
            </div>
        </nav>
    )
}
