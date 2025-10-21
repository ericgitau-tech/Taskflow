// ===== STATE MANAGEMENT =====
        // Application state stored in memory
        let tasks = [];
        let currentFilter = 'all';
        let taskIdCounter = 1;

        // ===== DOM ELEMENTS =====
        const taskForm = document.getElementById('taskForm');
        const taskTitle = document.getElementById('taskTitle');
        const taskCategory = document.getElementById('taskCategory');
        const taskPriority = document.getElementById('taskPriority');
        const tasksContainer = document.getElementById('tasksContainer');
        const themeToggle = document.getElementById('themeToggle');
        const filterButtons = document.querySelectorAll('.filter-btn');

        // Stat elements
        const totalTasksEl = document.getElementById('totalTasks');
        const activeTasksEl = document.getElementById('activeTasks');
        const completedTasksEl = document.getElementById('completedTasks');
        const completionRateEl = document.getElementById('completionRate');

        // ===== INITIALIZE APP =====
        function init() {
            loadTheme();
            loadSampleTasks(); // Load sample tasks for demo
            renderTasks();
            updateStats();
            attachEventListeners();
        }

        // ===== EVENT LISTENERS =====
        function attachEventListeners() {
            // Form submission
            taskForm.addEventListener('submit', handleTaskSubmit);
            
            // Theme toggle
            themeToggle.addEventListener('click', toggleTheme);
            
            // Filter buttons
            filterButtons.forEach(btn => {
                btn.addEventListener('click', handleFilterClick);
            });
        }

        // ===== TASK OPERATIONS =====
        function handleTaskSubmit(e) {
            e.preventDefault();
            
            const newTask = {
                id: taskIdCounter++,
                title: taskTitle.value.trim(),
                category: taskCategory.value,
                priority: taskPriority.value,
                completed: false,
                createdAt: new Date().toISOString()
            };

            tasks.unshift(newTask); // Add to beginning of array
            
            // Reset form
            taskForm.reset();
            
            // Update UI
            renderTasks();
            updateStats();
            
            // Show success animation
            showNotification('Task added successfully! 🎉');
        }

        function toggleTaskComplete(taskId) {
            const task = tasks.find(t => t.id === taskId);
            if (task) {
                task.completed = !task.completed;
                renderTasks();
                updateStats();
            }
        }

        function deleteTask(taskId) {
            tasks = tasks.filter(t => t.id !== taskId);
            renderTasks();
            updateStats();
            showNotification('Task deleted! 🗑️');
        }

        // ===== RENDERING =====
        function renderTasks() {
            const filteredTasks = getFilteredTasks();
            
            if (filteredTasks.length === 0) {
                tasksContainer.innerHTML = `
                    <div class="empty-state">
                        <div class="empty-state-icon">📋</div>
                        <h2>No tasks found</h2>
                        <p>Add a new task or change your filter</p>
                    </div>
                `;
                return;
            }

            tasksContainer.innerHTML = filteredTasks.map(task => `
                <div class="task-card ${task.completed ? 'completed' : ''}" data-task-id="${task.id}">
                    <div class="task-header">
                        <h3 class="task-title">${escapeHtml(task.title)}</h3>
                        <span class="task-priority priority-${task.priority}">
                            ${task.priority}
                        </span>
                    </div>
                    <div class="task-category">${task.category}</div>
                    <div class="task-actions">
                        <button class="btn btn-small btn-success" onclick="toggleTaskComplete(${task.id})">
                            ${task.completed ? '↩️ Undo' : '✓ Complete'}
                        </button>
                        <button class="btn btn-small btn-danger" onclick="deleteTask(${task.id})">
                            🗑️ Delete
                        </button>
                    </div>
                </div>
            `).join('');
        }

        function getFilteredTasks() {
            switch(currentFilter) {
                case 'active':
                    return tasks.filter(t => !t.completed);
                case 'completed':
                    return tasks.filter(t => t.completed);
                case 'high':
                case 'medium':
                case 'low':
                    return tasks.filter(t => t.priority === currentFilter);
                default:
                    return tasks;
            }
        }

        function updateStats() {
            const total = tasks.length;
            const completed = tasks.filter(t => t.completed).length;
            const active = total - completed;
            const rate = total > 0 ? Math.round((completed / total) * 100) : 0;

            totalTasksEl.textContent = total;
            activeTasksEl.textContent = active;
            completedTasksEl.textContent = completed;
            completionRateEl.textContent = `${rate}%`;
        }

        // ===== FILTERING =====
        function handleFilterClick(e) {
            const filter = e.target.dataset.filter;
            
            // Update active state
            filterButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Apply filter
            currentFilter = filter;
            renderTasks();
        }

        // ===== THEME MANAGEMENT =====
        function toggleTheme() {
            const currentTheme = document.documentElement.getAttribute('data-theme');
            const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
            
            document.documentElement.setAttribute('data-theme', newTheme);
            themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
            
            // Store in memory (would use localStorage in production)
        }

        function loadTheme() {
            // Default to light theme
            document.documentElement.setAttribute('data-theme', 'light');
            themeToggle.textContent = '🌙';
        }

        // ===== UTILITY FUNCTIONS =====
        function escapeHtml(text) {
            const div = document.createElement('div');
            div.textContent = text;
            return div.innerHTML;
        }

        function showNotification(message) {
            // Simple notification (could be enhanced with a proper notification system)
            console.log(message);
        }

        // ===== SAMPLE DATA =====
        function loadSampleTasks() {
            // Load some sample tasks for demo purposes
            tasks = [
                {
                    id: taskIdCounter++,
                    title: 'Complete project documentation',
                    category: 'Work',
                    priority: 'high',
                    completed: false,
                    createdAt: new Date().toISOString()
                },
                {
                    id: taskIdCounter++,
                    title: 'Review code pull requests',
                    category: 'Work',
                    priority: 'medium',
                    completed: false,
                    createdAt: new Date().toISOString()
                },
                {
                    id: taskIdCounter++,
                    title: 'Buy groceries',
                    category: 'Shopping',
                    priority: 'low',
                    completed: true,
                    createdAt: new Date().toISOString()
                },
                {
                    id: taskIdCounter++,
                    title: 'Learn React hooks',
                    category: 'Learning',
                    priority: 'medium',
                    completed: false,
                    createdAt: new Date().toISOString()
                }
            ];
        }

        // ===== START APPLICATION =====
        init();
